import React,{useState} from 'react'
import './InputFileStyle.css'


// imageBanner false envia la imagen de perfil d elo contrario enviara banner
const InputFileProfile = () => {


    const handleChangeFile = ( e ) => {
        const file = e.target.files[0];
        console.log(file)
        console.log('soy perfil')
    }
    return (
        <>
        <div className="container-input">
            <input type="file" name="file-6" 
            onChange={ handleChangeFile } 
            id="file-6" 
            className={`inputfile inputfile-6 hiddenInput`}
            data-multiple-caption="{count} archivos seleccionados" 
            multiple 
            accept="image/*;capture=camera"/>
            <label htmlFor="file-6">
            <i className="fas fa-camera iborrainputfile iPosition"></i>
            <span className="iborrainputfile"></span>
            </label>
        </div>
        </>
    )
}

export default InputFileProfile
