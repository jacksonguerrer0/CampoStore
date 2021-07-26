import React,{ useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import './star-raiting/StarRaiting.js'
import { ContentStar } from "./star-raiting/StarRaiting.js";
const StarRaiting = () =>{
    const [raiting, setRaiting] = useState({raiting:0})

  const onStarClick = async (nextValue, prevValue, name) =>{
    setRaiting({ rating: nextValue });
  }
    const { rating } = raiting;

    return (
      <ContentStar>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </ContentStar>
    );
}

export default StarRaiting