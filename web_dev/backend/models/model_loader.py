from tensorflow.keras.models import load_model
import os
def load_signature_model():
    base_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../ML_Model'))
    model_path = os.path.join(base_path, 'signature_cnn.h5')

    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model file not found at {model_path}")

    model = load_model(model_path)
    print(f"Model loaded successfully: {model_path}")
    return model
