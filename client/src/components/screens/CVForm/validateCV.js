export default function validateCV(values){
    let errors = {}

    if (!values.fullname.trim()) {
        errors.fullname = 'Pertanyaan wajib dijawab';
    }

    if (!values.nickname.trim()) {
        errors.nickname = 'Pertanyaan wajib dijawab';
    }

    return errors;
}

