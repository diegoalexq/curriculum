import React, { Component } from 'react';
import Image from '../img/image';
import Bio from '../bio/bio';
import Contact from '../contact/contact';
import Skills from '../skills/skills';
import Languages from '../languages/languages';
import Information from '../information/information';
import './section1.css';

class Section1 extends Component {
  render() {
    return (
        <div className ="Section1">
        {/* 212 312 */}
            <svg height="280" width="600">
              <polygon points="0 240,340 0,0 0"/>
            </svg>
            <Image></Image>
            <Bio data ={this.props.data}></Bio>
            <Information data ={this.props.data}></Information>
            <Contact data ={this.props.data}></Contact>
            <Skills data ={this.props.data}></Skills>
            <Languages data ={this.props.data}></Languages>
        </div>
    )
  }
}

export default Section1

