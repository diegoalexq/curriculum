import React from 'react';
import Title from '../../generics/subtitle';

export default function Academy ({ data }) {
	return (
	<section className ="academy">
		<Title title={'EDUCACIÓN'} showHR={false}/>
		<div className="academy__carreer">
			<hr></hr>
			<div className="academy__carreer__box_1">
				{data.carreer.toUpperCase()}
			</div>
			<div className="academy__carreer__box_2">
				{data.fe_desde} - {data.fe_hasta}
			</div>
		</div>
		<div className="academy__university">
			{data.university}
		</div>
	</section>
	)
}