import React from 'react';
import './work.css';

export default function Work({ data }) {
	const listWorks = data.map((item, i) =>
		<div className={`ListWork_${i}`} key={i}>
		<hr></hr>
			<div className="Position">
				<div className="box_1">
					{item.position.toUpperCase()}
				</div>
				<div className="box_2">
					{item.fe_desde} - {item.fe_hasta}
				</div>
			</div>
			<div className = "Company">
				{item.company.toUpperCase()} 
			</div>
			<div className = "Description">
				{item.description}
			</div>
		</div>
	)
	return (
		<div className="Work">
			<div className ="subtitle">
				<span>EXPERIENCIA</span>
			</div>
			{listWorks}
		</div>
	)
}