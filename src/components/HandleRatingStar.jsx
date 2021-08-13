import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
import Toastify from 'toastify-js';
import { ContentStar } from './star-raiting/StarRaiting'

const HandleRatingStar = ({setShowModal}) => {
    const [stars, setStars] = useState(0)
    const changeRating = (newRaiting, name) => {
        setStars(newRaiting)
        setShowModal(false)
        // se envia la puntuacion
        // si la respuesta es 200 salir del modal y mostrar el siguiente mensaje
        // if (response.status === 200) {
        //     setShowModal(false)
        //     Toastify({
        //         text: "Calificación Exitosa!",
        //         backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        //         duration: 3000
        //       }).showToast();
        // }else{
        //     Toastify({
        //         text: "Hubo un error al calificar",
        //         backgroundColor: "linear-gradient(to right, #b93c1d, #f81808)",
        //         duration: 3000
        //       }).showToast();
        // }

    }
    return (
        <ContentStar>
        <StarRatings
          rating={stars}
          starRatedColor='#ffcc1c'
          starHoverColor='#ffcc1c'
          changeRating={changeRating}
          numberOfStars={5}
          name='rating'
          starDimension='2rem'
        />
      </ContentStar>
    )
}

export default HandleRatingStar
