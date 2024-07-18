"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
import { RevolvingDot } from 'react-loader-spinner'
const Button = ({ content }) => {
    const { pending } = useFormStatus()

    return (
        <>
            <button disabled={pending} className={`w-full text-center rounded-md text-white mt-9 mb-3 font-bold bg-blue-600 p-5 ${pending && 'bg-[#013b95]'}`}>
                {pending ? (
                    <h4>
                        Wait Please...
                    </h4>
                ) : (content)}
            </button>
        </>
    )
}

export default Button