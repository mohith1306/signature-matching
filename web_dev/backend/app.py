from flask import Flask, request, jsonify
from flask_cors import CORS
from models.model_loader import load_signature_model
import numpy as np
import cv2
from tensorflow.keras.models import Model

app = Flask(__name__)
CORS(app)

base_model = load_signature_model()
dummy_input = np.zeros((1, 128, 128, 1))
_ = base_model(dummy_input)
feature_model = Model(inputs=base_model.inputs, outputs=base_model.layers[-2].output)

def preprocess_image(file):
    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_GRAYSCALE)
    if img is None:
        return None
    img = cv2.resize(img, (128, 128)) / 255.0
    img = np.expand_dims(img, axis=(0, -1))
    return img
def cosine_similarity(feat1, feat2):
    feat1_flat = feat1.flatten()
    feat2_flat = feat2.flatten()

    dot_product = np.dot(feat1_flat, feat2_flat)
    norm1 = np.linalg.norm(feat1_flat)
    norm2 = np.linalg.norm(feat2_flat)
    
    return dot_product / (norm1 * norm2)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image1' not in request.files or 'image2' not in request.files:
        return jsonify({'error': 'Both images are required'}), 400

    img1 = preprocess_image(request.files['image1'])
    img2 = preprocess_image(request.files['image2'])

    if img1 is None or img2 is None:
        return jsonify({'error': 'Invalid image(s)'}), 400

    feat1 = feature_model.predict(img1, verbose=0)
    feat2 = feature_model.predict(img2, verbose=0)

    similarity = cosine_similarity(feat1, feat2)
    percentage = float(similarity * 100)

    percentage = max(0, min(100, percentage))

    return jsonify({
        'similarity_score': round(percentage, 2),
        'match_percentage': round(percentage, 2)
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)