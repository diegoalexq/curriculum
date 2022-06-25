import React from 'react';
import image from "../../../assets/images/img-person.jpg";

export default function Image() {
  return(
    <section className="image">
      <img src={image} alt="img-person"></img>
    </section>
  )
}