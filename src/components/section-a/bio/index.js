import React from 'react';
import './bio.css';

export default function Bio({data}) {
	return (
		<div className ="bio">
			<div className ="subtitle">
				<span> PERFIL </span>
				<hr></hr>
			</div>
			<div className="description">
				{data.description}
			</div>
		</div>
	)
}