import React from 'react';

const Card = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <img src= {props.imgUrl}></img>
    <p>{props.photoCaption}</p>
  </div>
  )
}

export default Card;