import React,{useState, useEffect} from "react";
import "./App.scss";
import axios  from "axios";
import Card from "./Card"


function App() {
 const [data,setData] =  useState({});
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=agKZPLbqC4bCnshJcQXpx1sX7oDabUcRvJN1dg5c ')
    .then(res => {
      console.log('Result', res)
      setData(res.data)
    });
},[])

  return (
    <div className="App">
      <Card title={data.title} photoCaption ={data.explanation} imgUrl={data.url} media_type={data.media_type}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;

//&date=2019-07-15