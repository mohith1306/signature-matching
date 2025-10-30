🖋️ Signature Verification Web App
A deep learning-powered web application that compares two handwritten signatures to determine their similarity percentage. Built with a Flask backend for model inference and a React frontend for an intuitive user interface.

⚙️ Tech Stack
Frontend: React.js, Vite, Axios, CSS
Backend: Flask, Flask-CORS, OpenCV, NumPy
Machine Learning: TensorFlow/Keras, CNN Model

🧠 Project Structure

Signature_verification/
│
├── ML_Model/                          # Machine Learning Model Files
│   ├── app_m.py                       # Model inference helper
│   ├── signature_cnn.h5               # Base CNN model
│   └── signature_v1_cnn.h5            # Trained signature verification model
│
└── web_dev/
    │
    ├── backend/                       # Flask Backend
    │   ├── models/
    │   │   └── model_loader.py        # ML model loader
    │   └── app.py                     # Flask API for signature analysis
    │
    └── frontend/                      # React + Vite Frontend
        ├── public/                    # Static assets
        ├── src/
        │   ├── assets/                # Images/icons (optional)
        │   ├── pages/                 # Future routing pages
        │   ├── App.jsx                # Root React component
        │   ├── App.css                # Root styles
        │   ├── Center.jsx             # Signature upload UI
        │   ├── Center.css             # Upload UI styles
        │   ├── Result.jsx             # Result display page
        │   ├── Result.css             # Result page styles
        │   ├── Header.jsx             # Navbar/Header component
        │   ├── Header.css             # Header styles
        │   ├── index.css              # Global styles
        │   └── main.jsx               # App entry point
        ├── index.html                 # HTML template
        ├── vite.config.js             # Vite configuration
        ├── package.json               # Node dependencies
        └── README.md                  # Project documentation

🚀 Setup Instructions
1️⃣ Clone the Repository

git clone https://github.com/mohith1306/signature-matching.git
cd signature_verification

2️⃣ Backend Setup

# Navigate to backend directory
cd web_dev/backend

# Install Python dependencies
pip install flask flask-cors tensorflow numpy opencv-python

# Run the Flask server
python app.py

🟢 Backend runs at: http://localhost:5000
3️⃣ Frontend Setup

# Navigate to frontend directory
cd web_dev/frontend

# Install Node dependencies
npm install

# Run the development server
npm run dev

🟢 Frontend runs at: http://localhost:5173

🔍 How It Works

1) Upload two signature images (user signature + reference signature)
2) Flask backend receives and processes images via /predict endpoint
3) CNN model extracts features and compares both signatures
4) Result page displays the similarity percentage with visual feedback

💡 Example Output

Similarity        Message
87.9%             ✅ "Signatures are very likely to match"
23.4%             ⚠️ "Signatures are likely different"
