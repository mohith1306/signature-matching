import React, { useState } from 'react';
import './Center.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Center = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFile1 = (e) => {
    const f = e.target.files && e.target.files[0];
    setImage1(f || null);
  };

  const handleFile2 = (e) => {
    const f = e.target.files && e.target.files[0];
    setImage2(f || null);
  };

  const analyze = async (e) => {
    e.preventDefault();
    if (!image1 || !image2) {
      alert("Please upload both images");
      return;
    }

    const formData = new FormData();
    formData.append("image1", image1);
    formData.append("image2", image2);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("API Response:", res.data);

      const percentage = res.data.match_percentage;
      let message = "Signatures are ";
      if (percentage >= 80) {
        message += `very likely to match (${percentage.toFixed(1)}% similarity)`;
      } else if (percentage >= 60) {
        message += `possibly matching (${percentage.toFixed(1)}% similarity)`;
      } else {
        message += `likely different (${percentage.toFixed(1)}% similarity)`;
      }

      // 👇 Navigate to result page instead of alert
      navigate('/result', {
        state: { similarity: percentage, message },
      });

    } catch (error) {
      console.error("Error analyzing signatures:", error);
      alert("Error analyzing signatures. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='center'>
      <div className="box">
        <div className="text">Upload your two signatures below</div>

        <div className="file_input">
          <label className="file-picker">
            <input type="file" onChange={handleFile1} accept="image/*" />
            <span className="file-picker__button">Choose Signature</span>
            <span className="file-picker__name">{image1 ? image1.name : 'No file chosen'}</span>
          </label>

          <label className="file-picker">
            <input type="file" onChange={handleFile2} accept="image/*" />
            <span className="file-picker__button">Choose Reference</span>
            <span className="file-picker__name">{image2 ? image2.name : 'No file chosen'}</span>
          </label>
        </div>

        <button className="analyze" onClick={analyze} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Signature"}
        </button>
      </div>
    </div>
  );
};

export default Center;
