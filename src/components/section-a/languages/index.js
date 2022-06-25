import React from 'react';
import Title from '../../generics/subtitle';

export default function Languages ({ data }) {
	const listLanguages = data.map((item, i) =>
		<div className="languages__name" key={i}>  {item.language}</div>
	);
	return (
		<div className ="languages">
			<Title title ={'IDIOMAS'}/>
			{listLanguages}
		</div>
	)
}