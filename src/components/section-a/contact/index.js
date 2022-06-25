import React from 'react';
import Title from '../../generics/subtitle';

export default function Contact ({ data }) {
	return (
		<section className="contact">
			<Title title = {'CONTACTO'}/>
			<div className="contact__direction">
				<i className="fas fa-map-marker-alt"></i> 
				<span className='contact__text'> {data.direction} </span>
			</div>
			<div className="contact__phone">
				<i className="fas fa-phone"></i>
				<span className='contact__text'> {data.phone} </span>
			</div>
			<div className ="contact__mail">
				<i className="fas fa-envelope"></i>
				<span className='contact__text'> {data.mail} </span>
			</div>
		</section>
  )
}