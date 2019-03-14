import React, { Component } from 'react';
import Work from '../work_experience/work';
import Academy from '../academy/academy';
import Courses from '../courses/courses';
import './section2.css';

class Section2 extends Component {
  render() {
    return (
        <div className ="Section2">
          <svg height="200" width="600">
            <polygon points="0 0,970 290,970 0"/>
          </svg>
            <div className="Header">
              <div className="Name">
                  {this.props.data.personal_information.name.toUpperCase()}
              </div>
              <div className="LastName">
                {this.props.data.personal_information.last_name.toUpperCase()}
              </div>
              <div className="design">
              <hr className="box"></hr>
              </div>
              <div className="Carreer">
                {this.props.data.personal_information.title_carreer.toUpperCase()}
              </div>
            </div>
            <Work data = {this.props.data.work_experience}></Work>
            <Academy data = {this.props.data.academic_information}></Academy>
            <Courses data = {this.props.data.courses}></Courses>
        </div>
    )
  }
}

export default Section2

