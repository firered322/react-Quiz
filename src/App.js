import React, { useState, useEffect } from "react";

const APIURL = "https://opentdb.com/api.php?amount=10&category=21";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  return questions.length != 0 ? (
    <div className="container">
      <div className="bg-teal-800 p-10 rounded-lg shadow-lg ">
        <h2 className="text-2xl">{questions[0].question}</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button className="bg-teal-800 p-4 font-semibold rounded shadow">
          {questions[0].correct_answer}
        </button>
        <button className="bg-teal-800 p-4 font-semibold rounded shadow">
          {questions[0].incorrect_answers[0]}
        </button>
        <button className="bg-teal-800 p-4 font-semibold rounded shadow">
          {questions[0].incorrect_answers[1]}
        </button>
        <button className="bg-teal-800 p-4 font-semibold rounded shadow">
          {questions[0].incorrect_answers[2]}
        </button>
      </div>
    </div>
  ) : (
    <h1 className="text-teal-800 text-2xl">Loading...</h1>
  );
}

export default App;
