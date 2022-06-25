import React from 'react';
import Title from '../../generics/subtitle';

export default function Bio({data}) {
	return (
		<section className ="bio">
			<Title title = {'PERFIL'} />
			<div className="bio__description">
				{data.description}
			</div>
		</section>
	)
}