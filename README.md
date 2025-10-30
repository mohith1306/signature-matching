# 🖋️ Signature Verification Web App

Signature verification is a **deep learning–powered web application** that compares two handwritten signatures to determine their similarity percentage.  
It uses a **Flask backend** for model inference and a **React frontend** for the user interface.

---

## ⚙️ Tech Stack

- **Frontend:** React.js, Axios, CSS  
- **Backend:** Flask, Flask-CORS, OpenCV, NumPy, TensorFlow/Keras  
- **Model:** CNN-based signature verification (`.h5` file)

---

## 🧠 Project Structure

Signature_verification/
│
├── ML_Model/ # Machine Learning model files
│ ├── app_m.py # Model inference helper
│ ├── signature_cnn.h5 # Base CNN model
│ └── signature_v1_cnn.h5 # Trained signature model
│
└── web_dev/
├── backend/ # Flask backend
│ ├── models/
│ │ └── model_loader.py # Loads ML model
│ └── app.py # Flask API for signature analysis
│
└── frontend/ # React + Vite frontend
├── public/
├── src/
│ ├── assets/ # (Optional) images/icons
│ ├── pages/ # Future routing pages (if any)
│ ├── App.jsx / App.css # Root React component
│ ├── Center.jsx / Center.css # Signature upload UI
│ ├── Result.jsx / Result.css # Result display page
│ ├── Header.jsx / Header.css # Navbar/Header component
│ ├── index.css / main.jsx # App entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md # Project documentation

yaml
Copy code

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/mohith1306/signature-matching.git
cd signature_verification
2️⃣ Backend Setup
bash
Copy code
cd web_dev/backend
pip install flask flask-cors tensorflow numpy opencv-python
python app.py
🟢 Backend runs at: http://localhost:5000

3️⃣ Frontend Setup
bash
Copy code
cd web_dev/frontend
npm install
npm run dev
🟢 Frontend runs at: http://localhost:5173

🔍 How It Works
Upload two signature images (user + reference).

Flask backend receives and processes them via /predict.

The trained CNN model compares both signatures.

Result Page displays the similarity percentage.

💡 Example Output
✅ “Signatures are very likely to match (87.9% similarity)”
⚠️ “Signatures are likely different (23.4% similarity)”

📁 Folder Overview
Folder	Description
ML_Model/	CNN model files
web_dev/backend/	Flask API & model loading logic
web_dev/frontend/	React UI components + pages

📄 License
Licensed under the MIT License — free for personal and academic use.

👨‍💻 Author
Mohith T
📧 tatinenimohith@gmail.com
🌐 https://github.com/mohith1306

yaml
Copy code

---

### ✅ To fix your current README:
1. Open your `README.md` file in VS Code.  
2. Delete all the messy text.  
3. Paste the formatted version above.  
4. Save the file.  
5. Run:
   ```bash
   git add README.md
   git commit -m "Fixed README formatting"
   git push
