import React from 'react';
import './bio.css';

function Bio (props) {
    return (
        <div className ="bio">
            <div className ="subtitle">
                <span>PERFIL</span>
                <hr></hr>
            </div>
            <div className="description">
                {props.data.bio.description}
            </div>
        </div>
    )

}

export default Bio;