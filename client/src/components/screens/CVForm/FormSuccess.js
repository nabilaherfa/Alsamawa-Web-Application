import React from 'react';
import './CVForm.css';


const FormSuccess = () => {
  return (
    <div className='form-container'>
      <h1 className='form-success'>Permintaan pembuatan CV berhasil diproses!</h1>
      <a id ="button-taaruf" href= {"/taaruf"}>Lanjutkan ke fitur taaruf</a>
    </div>
  );
};

export default FormSuccess;