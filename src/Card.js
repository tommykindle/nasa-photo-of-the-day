import React from 'react';

const Card = (props) => {
  return (
    <div style={{ paddingTop: '4.0em' }}>
      <h1>{props.title}</h1>
      {props.media_type === 'video' ? <iframe width="420" height="315" src={props.imgUrl}> </iframe> : <img src={props.imgUrl} />}
      <p>{props.photoCaption}</p>
    </div>
  )
}

export default Card;