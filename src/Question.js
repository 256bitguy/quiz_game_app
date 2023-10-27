import React, { useState } from "react";

const Question = ({ question, options, correctAnswer, onAnswer, isLastQuestion ,setShowScore}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const isCorrect = selectedOption === correctAnswer;
    onAnswer(isCorrect);

    if (!isLastQuestion) {
      setSelectedOption(null);
     
    }
    else{ setShowScore(true);}
  };

  if (!question) {
    // Handle the case where the question prop is not yet available
    return <div>Loading...</div>;
  }

  return (
    <div className="Question">
      <h1>{question}</h1>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          className={selectedOption === option ? "selected" : ""}
        >
          {option}
        </button>
      ))}
      <button onClick={handleSubmit} className="submit">
        Submit
      </button>
    </div>
  );
};

export default Question;
