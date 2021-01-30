import React, { useState } from 'react';
import IsiCV from './IsiCV'
import FormSuccess from './FormSuccess'
import './CVForm.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return(
        <>
            <div className='form-container'>
                {!isSubmitted ? <IsiCV submitForm={submitForm} />: <FormSuccess />}
            </div>
        </>
    )
}

export default Form