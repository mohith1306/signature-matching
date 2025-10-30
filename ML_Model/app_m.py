from tensorflow.keras.models import load_model

model = load_model("signature_cnn.h5")
model.summary()
