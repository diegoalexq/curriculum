import React from 'react';
import Title from '../../generics/subtitle';
import Description from '../../generics/description';

export default function Bio({data}) {
	return (
		<section className ="bio">
			<Title title = {'PERFIL'} />
			<Description description={data.description}/>
		</section>
	)
}