import React from 'react';
import SectionA from './section-a/index.js'
import SectionB from './section-b/index.js'
import './index.css';

export default function Home({ data }) {
  return (
    <div className="home">
      <SectionA data = {data}/>
      <SectionB data = {data}/>
    </div>
  )
}
