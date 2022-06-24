import React from 'react';
import './information.css';

export default function Information ({ data }) {
  return (
    <div className="Information">
      <div className ="subtitle">
          <span>DATOS PERSONALES</span>
          <hr></hr>
      </div>
      <div className ="birthdate">
        <i className="fas fa-calendar-alt"></i>
        <span> {data.birthdate}</span>
      </div>
      <div className ="dni">
        <i className="fas fa-id-card"></i>
        <span> {data.dni} </span>
      </div>
    </div>
  )
}