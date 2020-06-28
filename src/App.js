import React from "react";

const APIURL = "https://opentdb.com/api.php?amount=10&category=21";
function App() {
  return (
    <div className="container">
      <p>{APIURL}</p>
    </div>
  );
}

export default App;
