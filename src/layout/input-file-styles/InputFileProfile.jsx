import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import Toastify from 'toastify-js';
import { uploadFile } from '../../services';
import { getUser, updateProfile } from '../../services/login';
import './InputFileStyle.css'


// imageBanner false envia la imagen de perfil d elo contrario enviara banner
const InputFileProfile = () => {

    const history = useHistory();

    const handleChangeFile = async ( e ) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const response = await uploadFile(file);
            if (response.status === 200) {
                const idFile = response.data.data.id;

                const userOnline = await getUser();
                const userId = userOnline.data.data.id;
                const dataSend = {
                    avatar: idFile
                }
                const update = await updateProfile(dataSend, userId);
                if (update.status === 200) {
                    Toastify({
                        text: "Actualizado con éxito",
                        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                        duration: 3000
                      }).showToast();
                    history.go(0)
                }else{
                    Toastify({
                        text: "Hubo un error al guardar",
                        backgroundColor: "linear-gradient(to right, #b93c1d, #f81808)",
                        duration: 3000
                      }).showToast();
                }
            }
            //console.log(response.data.data.data.full_url)
        }
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
