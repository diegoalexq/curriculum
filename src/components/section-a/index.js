import React from 'react';
import Image from './img';
import Bio from './bio';
import Contact from './contact';
import Skills from './skills';
import Languages from './languages';
import Information from './information';
import './section-a.css';

export default function SectionA({ data }) {
  const { bio , personal_information , skills, languages } = data;
  return (
    <div className ="section-a">
      <svg height="280" width="600">
        <polygon points="0 240,340 0,0 0"/>
      </svg>
      <Image></Image>
      <Bio data ={bio}></Bio>
      <Information data ={personal_information.data_info}></Information>
      <Contact data ={personal_information.contact}></Contact>
      <Skills data ={skills}></Skills>
      <Languages data ={languages}></Languages>
    </div>
  )
}