import React from 'react';
import './skills.css';

function Skills (props) {
    const skills = props.data.skills;
    const listSkills = skills.map((skill , i) =>
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

export default Skills;