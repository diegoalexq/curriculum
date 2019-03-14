import React from 'react';
import Parser from 'html-react-parser';
import './courses.css';

function Courses (props) {
    console.log(props.data);
    const Courses = props.data;
    const listCourses = Courses.map((Course, i) =>
        <div className={`listCourses_${i}`} key={i}> 
         <hr></hr>
            <div className= "courseName">
                <div className="courseName_box_1">
                    {Course.course_name.toUpperCase()}
                </div>
                <div className="courseName_box_2">
                    {Parser(Course.icons)}
                </div>
            </div>
            <div className = "Platform">
                {Course.platform} 
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
export default Courses;