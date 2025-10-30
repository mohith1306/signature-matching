import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { similarity, message } = location.state || {};

  return (
    <div className="result-page">
      <div className="result-box">
        <h1>Signature Analysis Result</h1>
        {similarity !== undefined ? (
          <>
            <h2>{message}</h2>
            <p>Similarity Score: {similarity.toFixed(2)}%</p>
          </>
        ) : (
          <p>No analysis data found. Please try again.</p>
        )}
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
};

export default Result;
