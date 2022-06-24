import React from 'react';
import './contact.css';

export default function Contact ({ data }) {
	return (
		<div className="Contact">
			<div className ="subtitle">
				<span>CONTACTO</span>
				<hr></hr>
			</div>
			<div className="direction">
				<i className="fas fa-map-marker-alt"></i> 
				<span> {data.direction} </span>
			</div>
			<div className="phone">
				<i className="fas fa-phone"></i>
				<span> {data.phone} </span>
			</div>
			<div className ="mail">
				<i className="fas fa-envelope"></i>
				<span> {data.mail} </span>
			</div>
		</div>
  )
}