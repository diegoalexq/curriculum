import React from 'react';
import Title from '../../generics/subtitle';

export default function Information ({ data }) {
  return (
    <div className="information">
      <Title title={'DATOS PERSONALES'}/>
      <div className ="information__birthdate">
        <i className="fas fa-calendar-alt"></i>
        <span className='information__text'> {data.birthdate}</span>
      </div>
      <div className ="information__dni">
        <i className="fas fa-id-card"></i>
        <span className='information__text'> {data.dni} </span>
      </div>
    </div>
  )
}