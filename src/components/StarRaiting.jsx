import React,{ useState } from "react";
import StarRatings from 'react-star-ratings';
import variables from "../styles/variables.js";
import { ContentStar } from "./star-raiting/StarRaiting.js";

const StarRaiting = ({ stars }) =>{

    return (
      <ContentStar>
        <StarRatings
          rating={stars}
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