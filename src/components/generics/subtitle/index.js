import React from "react";

export default function Title({ title, showHR = true }) {
  return (
  <div className ="title">
    <span> { title } </span>
    { showHR && <hr></hr> }
  </div>
  )
}