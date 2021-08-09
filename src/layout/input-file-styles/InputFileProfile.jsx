import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
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
                    history.go(0)
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
