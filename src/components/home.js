import React, { Component } from 'react';
import Section1 from './section1/section1.js'
import Section2 from './section2/section2.js'
import './home.css';

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Section1 data = {this.props.data}/>
            <Section2 data = {this.props.data}/>
        </div>
    )
  }
}

export default Home

