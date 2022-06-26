import React from 'react';
import Parser from 'html-react-parser';
import Title from '../../generics/subtitle';

export default function Courses ({ data }) {
  const listCourses = data.map((item, i) =>
    <div className={`listCourses listCourses_${i}`} key={i}> 
      <hr></hr>
        <div className= "listCourses__courseName">
          <div className="listCourses__courseName__box_1">
            {item.course_name.toUpperCase()}
          </div>
          <div className="listCourses__courseName__box_2">
            {Parser(item.icons)}
          </div>
        </div>
        <div className = "listCourses__platform">
          {item.platform} 
        </div>
    </div>
  );
  return (
    <section className ="courses">
      <Title title= {'CURSOS'} showHR={false}/>
      {listCourses}
    </section>
  )
}