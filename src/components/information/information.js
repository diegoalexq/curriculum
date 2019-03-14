import React from 'react';
import './information.css';

function information (props) {
    const contact = props.data.personal_information.data_info;

    return (
        <div className="Information">
            <div className ="subtitle">
                <span>DATOS PERSONALES</span>
                <hr></hr>
            </div>
            <div className ="birthdate">
                <i className="fas fa-calendar-alt"></i>
                <span>
                    {contact.birthdate}
                </span>
            </div>
            <div className ="dni">
                <i className="fas fa-id-card"></i>
                <span>
                    {contact.dni}
                </span>
            </div>
        </div>
    )
}

export default information;