import React from 'react'

import ReCAPTCHA from "react-google-recaptcha";
export default function RecaptchaCode() {
    function onChange(value) {
        console.log('Captcha value', value)

    }
    return (
        <>
            <h1>React Recaptcha</h1>
            {/* npm package  
            npm i react-google-recaptcha
             */}
            {/* Domains server 127.0.0.1:3000 */}
            <ReCAPTCHA className='Captcha'
                sitekey="6Ld9sbwaAAAAANPYlId89XrjQnSr6H7KrZWC87gw"
                onChange={onChange}
            />
        </>
    )
}
