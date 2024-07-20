"use client"
import React from 'react';

const Button = ({ content, type,pending }) => {
    return (
        <button 
            type={type}
            disabled={pending} 
            className={`w-full text-center rounded-md text-white mt-9 mb-3 font-bold bg-blue-600 p-5 ${pending && 'bg-[#013b95]'}`}
        >
            {pending ? (
                <h4>
                    Wait Please...
                </h4>
            ) : (content)}
        </button>
    )
}

export default Button;
