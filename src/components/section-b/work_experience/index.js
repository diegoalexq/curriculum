import React from 'react';
import Title from '../../generics/subtitle';

export default function Work({ data }) {
	const listWorks = data.map((item, i) =>
		<div className={`listWork listWork_${i}`} key={i}>
		<hr></hr>
			<div className="listWork__position">
				<div className="listWork__position__box_1">
					{item.position.toUpperCase()}
				</div>
				<div className="listWork__position__box_2">
					{item.fe_desde} - {item.fe_hasta}
				</div>
			</div>
			<div className = "listWork__company">
				{item.company.toUpperCase()} 
			</div>
			<div className = "listWork__description">
				{item.description}
			</div>
		</div>
	)
	return (
		<section className="work">
			<Title title={'EXPERIENCIA'} showHR= {false} />
			{listWorks}
		</section>
	)
}