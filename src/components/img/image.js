import React from 'react';
import './image.css';
import image from "../../assets/images/jenifer.jpg";

// Las propiedades que va a recibir este componente funcional va a ser el tamaño que voy a necesitar la imagen
function Image() {
    return(
        <div className="img">
            <img src={image} alt="imagenLinda"></img>
        </div>
    )
}
export default Image;