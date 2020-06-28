import React from "react";

const APIURL = "https://opentdb.com/api.php?amount=10&category=21";
function App() {
  return (
    <div className="container">
      <div className="bg-teal-800 p-10 rounded-lg shadow-lg ">
        <h2 className="text-2xl">Questions Holder</h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-around">
        <button className="bg-teal-800 w-5/12 p-4 mb-4 font-semibold">
          Answer 1
        </button>
        <button className="bg-teal-800 w-5/12 p-4 font-semibold mb-4">
          Answer 2
        </button>
        <button className="bg-teal-800 w-5/12 p-4 font-semibold">
          Answer 3
        </button>
        <button className="bg-teal-800 w-5/12 p-4 font-semibold">
          Answer 4
        </button>
      </div>
    </div>
  );
}

export default App;
