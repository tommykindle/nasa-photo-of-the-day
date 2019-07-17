import React from "react";
import "./App.scss";
import axios  from "axios";

axios
.get('https://api.nasa.gov/planetary/apod?api_key=agKZPLbqC4bCnshJcQXpx1sX7oDabUcRvJN1dg5c ')
.then(res => {
  console.loq('Result', res)
});


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
