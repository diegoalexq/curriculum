import React from 'react';
import Title from '../../generics/subtitle';

export default function Skills ({ data }) {
  const listSkills = data.map((skill , i) =>
    <div className ="skills__name" key={i} >{skill.description.toUpperCase()}</div>
  );
  return (
    <div className ="skills">
			<Title title={'HABILIDADES'}/>
			{listSkills}
    </div>
  )
}