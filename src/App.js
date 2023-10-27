// src/App.js
import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import data from "./Data";
import "./App.css";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="App">
      {showScore ? (
        <Score score={score} totalQuestions={data.length} onRestart={handleRestart} />
      ) : (
        <Question
          question={data[currentQuestionIndex].question}
          options={data[currentQuestionIndex].options}
          correctAnswer={data[currentQuestionIndex].correctAnswer}
          onAnswer={handleAnswer}
          isLastQuestion={currentQuestionIndex === data.length - 1}
          setShowScore={setShowScore}
        />
        
      )}
    </div>
  );
};

export default App;
