import React from 'react';
import './image.css';
import image from "../../../assets/images/img-person.jpg";

export default function Image() {
  return(
    <div className="img">
        <img src={image} alt="imagenLinda"></img>
    </div>
  )
}