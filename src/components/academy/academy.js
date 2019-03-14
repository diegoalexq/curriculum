import React from 'react';
import './academy.css';

function Academy (props) {
    console.log(props.data);
// carreer: "Ingeniero de Sistemas"
// fe_desde: "2007"
// fe_hasta: "2012"
// university: "Universidad Nacional Experimental Politecnica de la Fuerza Armada Nacional (UNEFA)"
    return (
        <div className ="Academy">
            <div className ="subtitle">
                <span>EDUCACIÓN</span>
                <hr></hr>
            </div>
            <div className="carreer">
                <div className="box_1">
                    {props.data.carreer.toUpperCase()}
                </div>
                <div className="box_2">
                    {props.data.fe_desde} - {props.data.fe_hasta}
                </div>
            </div>
            <div className="university">
            {props.data.university}
            </div>
        </div>
    )
}
export default Academy;