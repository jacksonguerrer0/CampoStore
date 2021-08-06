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
          starRatedColor='#ffcc1c'
          starHoverColor='#ffcc1c'
          // changeRating={changeRating}
          numberOfStars={5}
          name='rating'
          starDimension='2rem'
        />
      </ContentStar>
    );
}

export default StarRaiting