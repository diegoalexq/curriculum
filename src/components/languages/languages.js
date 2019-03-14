import React from 'react';
import './languages.css';


function languages (props) {
    const Languages = props.data.Languages;
    const listLanguages = Languages.map((Language, i) =>
        <div className="listLanguages" key={i}>  {Language.language}</div>
    );
    return (
        <div className ="Languages">
            <div className ="subtitle">
                <span>IDIOMAS</span>
                <hr></hr>
            </div>
            {listLanguages}
        </div>
    )
}

export default languages;