import React,{ useState } from "react";
import StarRatings from 'react-star-ratings';
import variables from "../styles/variables.js";
import { ContentStar } from "./star-raiting/StarRaiting.js";

const StarRaiting = ({ stars }) =>{
    const [rating, setRating] = useState(stars)
    const changeRating = ( newRating, name ) => {
      setRating(newRating)
    }

    return (
      <ContentStar>
        <StarRatings
          rating={rating}
          starRatedColor='#FFFF00'
          starHoverColor='#FFFF00'
          // changeRating={changeRating}
          numberOfStars={6}
          name='rating'
          starDimension='2rem'
        />
      </ContentStar>
    );
}

export default StarRaiting