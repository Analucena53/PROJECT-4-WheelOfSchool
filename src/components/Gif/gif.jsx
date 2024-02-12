import React from 'react';
import './gif.css';

function GifComponent() {
    return (
        <div className='gif-container'>
            <h1 className='error-tittle'>Oops! <strong>Error 404</strong> </h1>
            <h2 className='error-subtittle'>Lola no está disponible ahora mismo para ayudarte..</h2>
            <img className='img-lola'
                src="https://i.pinimg.com/originals/59/8d/d6/598dd63391af04d400dff70172d6e396.gif"
                alt="Lola Flores,pena penita pena"
                width="500"
                height="400"
            />
            <h2 className='text-lola'>Usa la pedagogía activa y si ves que sigues necesitando ayuda entonces contacta con la academia a través de:</h2>
            <ul className='ul-lola'>
                <li className='email-lola'><strong>Email:</strong> academialolaflores@gmail.com </li>
                <li className='tlf-lola'><strong>Tlf:</strong> 655 788 900</li>
            </ul>
        </div>
    );
}

export default GifComponent;
