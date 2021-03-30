import React from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = React.useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => {
        return (
          <button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAnswer([text]);
              selected(text);
            }}
          >
            {text}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionBox;
