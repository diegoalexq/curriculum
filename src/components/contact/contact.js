import React from 'react';
import './contact.css';

function Contact (props) {
    const contact = props.data.personal_information.contact;

    return (
        <div className="Contact">
            <div className ="subtitle">
                <span>CONTACTO</span>
                <hr></hr>
            </div>
            <div className="direction">
                <i className="fas fa-map-marker-alt"></i> 
                <span>
                    {contact.direction}
                </span>
            </div>
            <div className="phone">
                <i className="fas fa-phone"></i>
                <span>
                    {contact.phone}
                </span>
            </div>
            <div className ="mail">
                <i className="fas fa-envelope"></i>
                <span>
                    {contact.mail}
                </span>
            </div>
            {/* <div className ="birthdate">
                <i className="far fa-calendar-alt"></i>
                <span>
                    {contact.birthdate}
                </span>
            </div>
            <div className ="dni">
                <i className="far fa-id-card"></i>
                <span>
                    {contact.dni}
                </span>
            </div> */}
        </div>
    )
}

export default Contact;