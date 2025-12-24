import { useState } from "react";
import questions from "../data/questions";

function Quiz({ setStep, score, setScore }) {
  const [index, setIndex] = useState(0);

  function checkAnswer(option) {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setStep("result");
    }
  }

  return (
    <div className="card">
      <h2>Quiz App</h2>
      <hr />
      <p>{index + 1}. {questions[index].question}</p>

      {questions[index].options.map((opt, i) => (
        <button key={i} onClick={() => checkAnswer(opt)}>
          {opt}
        </button>
      ))}

    </div>
  );
}

export default Quiz;
