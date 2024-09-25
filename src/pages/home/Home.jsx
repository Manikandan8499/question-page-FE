import React, { useState } from "react";

const Home = () => {
  const questions = [
    { question: "What is the capital of India", correctAnswer: "Delhi" },
    { question: "Is divide by 0 is infinity?", correctAnswer: "yes" },
    { question: "how many districts in tamilnadu?", correctAnswer: "34" },
    { question: "Is HTML is programming language?", correctAnswer: "No" }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(10).fill(""));
  const [results, setResults] = useState(null);

  const handleChange = (e, index) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = e.target.value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = 0;
    const feedback = questions.map((q, index) => {
      if (userAnswers[index].toLowerCase() === q.correctAnswer.toLowerCase()) {
        score++;
        return {
             question: q.question, 
             result: "Correct" 
            };
      } else {
        return {
             question: q.question, 
             result: `Wrong (Correct answer: ${q.correctAnswer})` };
      }
    });
    setResults({ score, feedback });
  };

  return (
    <div style={{display: "flex", justifyContent: "center", border: "1px solid black"}}>
      <h1>Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index} style={{margin: "50px"}}>
            <label>
               {q.question}
            </label>
            <br />
            <input
              type="text"
              value={userAnswers[index]}
              onChange={(e) => handleChange(e, index)}
              required
              style={{ width: "200px", padding: "5px" }}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      {results && (
        <div>
          <h2>Results</h2>
          <p>Your score: {results.score} / 10</p>
          <ul>
            {results.feedback.map((f, index) => (
              <li key={index}>
                {f.question}: {f.result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
