import React,{useState} from 'react'
import './InputFileStyle.css'


// imageBanner false envia la imagen de perfil d elo contrario enviara banner
const InputFile = ({}) => {


    // const handleChangeFile = ({ target }) => {
    //     const file = target.files[0];
    //     if (imageBanner === 'true') {
    //         console.log('Imagen banner') 
    //     }
    //     if(imageBanner === 'false'){
    //         console.log('imagen perfil')
    //     }
    // }
    return (
        <>
        <div className="container-input">
            <input type="file" name="file-6" 
            // onChange={ handleChangeFile } 
            id="file-6" 
            className="inputfile inputfile-6 hiddenInput" 
            data-multiple-caption="{count} archivos seleccionados" 
            multiple />
            <label htmlFor="file-6">
            <i className="fas fa-camera iborrainputfile iPosition"></i>
            <span className="iborrainputfile"></span>
            </label>
        </div>
        </>
    )
}

export default InputFile
