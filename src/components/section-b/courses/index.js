import React from 'react';
import Parser from 'html-react-parser';
import './courses.css';

export default function Courses ({ data }) {
  const listCourses = data.map((item, i) =>
    <div className={`listCourses_${i}`} key={i}> 
      <hr></hr>
        <div className= "courseName">
          <div className="courseName_box_1">
            {item.course_name.toUpperCase()}
          </div>
          <div className="courseName_box_2">
            {Parser(item.icons)}
          </div>
        </div>
        <div className = "Platform">
          {item.platform} 
        </div>
    </div>
  );
  return (
    <div className ="Courses">
      <div className ="subtitle">
          <span>CURSOS</span>
      </div>
      {listCourses}
    </div>
  )
}