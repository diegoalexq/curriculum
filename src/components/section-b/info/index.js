import React from "react";

export default function Info({ data }) {
  return (
    <section className="info">
      <div className="info__name">
          {data.name.toUpperCase()}
      </div>
      <div className="info__lastName">
        {data.last_name.toUpperCase()}
      </div>
      <div className="info__design">
        <hr className="info__design__box"></hr>
      </div>
      <div className="info__carreer">
        {data.title_carreer.toUpperCase()}
      </div>
    </section>
  )
}