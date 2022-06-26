import React from 'react';
import Info from './info';
import Work from './work_experience';
import Academy from './academy';
import Courses from './courses';

export default function SectionB({data}) {
  const { personal_information , courses, work_experience, academic_information} = data;

	return (
		<div className ="section-b">
			<svg height="200" width="625">
				<polygon points="0 0,970 290,970 0"/>
			</svg>
			<Info data = {personal_information}/>
			<Work data = {work_experience}/>
			<Academy data = {academic_information}/>
			<Courses data = {courses}/>
		</div>
	)
}