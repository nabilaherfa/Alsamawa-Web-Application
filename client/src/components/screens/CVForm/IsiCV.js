import React from 'react'
import Useform from './useForm'
import validate from './validateCV'
import './CVForm.css';

const IsiCV = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = Useform(submitForm, validate);

    return (
        <div className="form-container">

            <h1>Lengkapi CV terlebih dahulu sebelum dapat menggunakan fitur Taaruf!</h1>
            <form className="form" onSubmit={handleSubmit}>

                <div className="personal">
                    <h2>Data Pribadi</h2>

                    <div className="form-inputs">
                        <label htmlFor="fullname" className='form-label'>
                            Nama Lengkap
                        </label>
                        <input
                            type='text' 
                            name='fullname'
                            className='form-input'
                            placeholder="Masukkan nama lengkap"
                            value = {values.fullname}
                            onChange = {handleChange}/>
                    </div>
                    {errors.fullname && <p>{errors.fullname}</p>}
                    <div className="form-inputs">
                        <label htmlFor="nickname" className='form-label'>
                            Nama Panggilan
                        </label>
                        <input
                            type='text' 
                            name='nickname'
                            className='form-input'
                            placeholder="Masukkan nama panggilan"
                            value = {values.nickname}
                            onChange = {handleChange}/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="gender" className='form-label'>
                            Jenis Kelamin
                        </label>
                        <select className='form-input' id="gender" name="genderlist" form="genderform" value={values.gender} onChange = {handleChange}>
                            <option value="akhwat">Akhwat</option>
                            <option value="ikhwan">Ikhwan</option>
                        </select>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="dob" className='form-label'>
                            Tanggal lahir
                        </label>
                        <input
                            type='date' 
                            name='DOB'
                            className='form-input'/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="pob" className='form-label'>
                            Kota kelahiran
                        </label>
                        <input
                            type='text' 
                            name='POB'
                            className='form-input'
                            placeholder="Masukkan kota kelahiran"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="proffesion" className='form-label'>
                            Profesi
                        </label>
                        <input
                            type='text' 
                            name='proffesion'
                            className='form-input'
                            placeholder="Masukkan profesi"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="current_address" className='form-label'>
                            Alamat tempat tinggal saat ini
                        </label>
                        <input
                            type='text' 
                            name='current_address'
                            className='form-input'
                            placeholder="Masukkan alamat tempat tinggal Anda saat ini"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="marital_status" className='form-label'>
                            Status pernikahan
                        </label>
                        <select className='form-input' id="marital_status">
                            <option value="married">Sudah menikah</option>
                            <option value="single">Belum menikah</option>
                        </select>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="tribe" className='form-label'>
                            Suku
                        </label>
                        <input
                            type='text' 
                            name='tribe'
                            className='form-input'
                            placeholder="Masukkan nama suku Anda"/>
                    </div>
        
                </div>

                <div className="physical">
                    <h2>Deskripsi Fisik</h2>

                    <div className="form-inputs">
                        <label htmlFor="height" className='form-label'>
                            Tinggi Badan
                        </label>
                        <input
                            type='number' 
                            name='height'
                            className='form-input'
                            placeholder="Masukkan tinggi badan (dalam cm)"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="weight" className='form-label'>
                            Berat badan
                        </label>
                        <input
                            type='number' 
                            name='weight'
                            className='form-input'
                            placeholder="Masukkan berat badan (dalam kg)"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="haircolor" className='form-label'>
                            Warna Rambut
                        </label>
                        <input
                            type='text' 
                            name='haircolor'
                            className='form-input'
                            placeholder="Masukkan warna rambut"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="haircolor" className='form-label'>
                            Warna Rambut
                        </label>
                        <input
                            type='text' 
                            name='haircolor'
                            className='form-input'
                            placeholder="Masukkan warna rambut"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="physical_disability" className='form-label'>
                            Cacat fisik
                        </label>
                        <input
                            type='text' 
                            name='physical_disability'
                            className='form-input'
                            placeholder="Masukkan cacat fisik tertentu jika ada"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="history_of_disease" className='form-label'>
                            Riwayat Penyakit
                        </label>
                        <input
                            type='text' 
                            name='history_of_desease'
                            className='form-input'
                            placeholder="Masukkan riwayat penyakit Anda"/>
                    </div>
                    
                    
                </div>

                <div className="Family">
                    <h2>Data Keluarga</h2>

                    <div className="form-inputs">
                        <label htmlFor="namaayah" className='form-label'>
                            Nama Orangtua Laki-laki
                        </label>
                        <input
                            type='text' 
                            name='namaayah'
                            className='form-input'
                            placeholder="Masukkan nama ayah"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="profesiayah" className='form-label'>
                            Profesi Orangtua Laki-laki
                        </label>
                        <input
                            type='text' 
                            name='profesiayah'
                            className='form-input'
                            placeholder="Masukkan profesi ayah"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="namaibu" className='form-label'>
                            Nama Orangtua Perempuan
                        </label>
                        <input
                            type='text' 
                            name='namaibu'
                            className='form-input'
                            placeholder="Masukkan warna rambut"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="profesiibu" className='form-label'>
                            Profesi Orangtua Perempuan
                        </label>
                        <input
                            type='text' 
                            name='profesiibu'
                            className='form-input'
                            placeholder="Masukkan warna rambut"/>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="banyaksaudara" className='form-label'>
                            Jumlah Bersaudara
                        </label>
                        <input
                            type='text' 
                            name='banyaksaudara'
                            className='form-input'
                            placeholder="Jumlah saudara (tidak termasuk diri sendiri)"/>
                    </div>
                    
                    
                </div>

                <button className='form-input-btn' type = 'submit'>
                    Submit CV
                </button>

                <span></span>
            </form>
        </div>
    )
}

export default IsiCV
