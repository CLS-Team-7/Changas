import React from 'react';
import WhatsApp from '../../assets/WhatsApp.svg';

function WhatsAppButton({userPhone}) {
    return (
        <span className="w-2">
            <a href={`https://wa.me/${userPhone}`} target='_blank' rel="noreferrer"><img className='w-8 ml-2 inline-block' src={WhatsApp} alt="WhatsApp Icon" /></a>
        </span>
    )
}

export default WhatsAppButton
