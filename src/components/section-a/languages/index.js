import React from 'react';
import './languages.css';

export default function languages ({ data }) {
	const listLanguages = data.map((item, i) =>
		<div className="listLanguages" key={i}>  {item.language}</div>
	);
	return (
		<div className ="Languages">
			<div className ="subtitle">
					<span>IDIOMAS</span>
					<hr></hr>
			</div>
			{listLanguages}
		</div>
	)
}