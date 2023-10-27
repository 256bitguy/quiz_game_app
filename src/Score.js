// src/Score.js
import React from "react";

const Score = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="Score">
      <h1>Your Score: {score}/{totalQuestions}</h1>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

export default Score;
