import React from 'react';
import './skills.css';

export default function Skills ({ data }) {
  const listSkills = data.map((skill , i) =>
    <div className ="listSkills" key={i} >{skill.description.toUpperCase()}</div>
  );
  return (
    <div className ="skills">
			<div className ="subtitle">
				<span>HABILIDADES</span>
				<hr></hr>
			</div>
			{listSkills}
    </div>
  )
}