import React from 'react';
import './academy.css';

export default function Academy ({ data }) {
	return (
	<div className ="Academy">
		<div className ="subtitle">
			<span>EDUCACIÓN</span>
			<hr></hr>
		</div>
		<div className="carreer">
			<div className="box_1">
				{data.carreer.toUpperCase()}
			</div>
			<div className="box_2">
				{data.fe_desde} - {data.fe_hasta}
			</div>
		</div>
		<div className="university">
			{data.university}
		</div>
	</div>
	)
}