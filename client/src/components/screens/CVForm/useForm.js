import {useState, useEffect} from 'react';

const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        fullname : '',
        nickname : '',
        gender : '',
        dob : '',
        pbo : '',
        profession : '',
        current_address : '',
        marital_status : '',
        tribe : '',
        height : null,
        weight: null,
        haircolor : '',
        namaayah: '',
        profeseiayah: '',
        namaibu : '',
        profesiibu : ''
    });

    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
           [name] : value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true)
    };

    useEffect(
        () => {
            if (isSubmitting) {
                callback();
            } 
        },
        [errors]
    );

    return {handleChange, values, handleSubmit, errors}

}

export default useForm;