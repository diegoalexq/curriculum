import React from 'react';
import Work from './work_experience';
import Academy from './academy';
import Courses from './courses';
import './section-b.css';

export default function SectionB({data}) {
  const { personal_information , courses, work_experience, academic_information} = data;

	return (
		<div className ="section-b">
			<svg height="200" width="625">
				<polygon points="0 0,970 290,970 0"/>
			</svg>
			<div className="Header">
				<div className="Name">
						{personal_information.name.toUpperCase()}
				</div>
				<div className="LastName">
					{personal_information.last_name.toUpperCase()}
				</div>
				<div className="design">
				<hr className="box"></hr>
				</div>
				<div className="Carreer">
					{personal_information.title_carreer.toUpperCase()}
				</div>
			</div>
			<Work data = {work_experience}></Work>
			<Academy data = {academic_information}></Academy>
			<Courses data = {courses}></Courses>
		</div>
	)
}