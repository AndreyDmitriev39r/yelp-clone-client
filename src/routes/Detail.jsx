import { useEffect } from "react";
import {useParams} from "react-router-dom";
import { useGlobalContext } from "../context";

import StarRating from "../components/StarRating";

const Detail = () => {
  const {id} = useParams();
  const {detailHeading, getSingleRestaurant} = useGlobalContext();
  useEffect(() => {
    getSingleRestaurant(id);
  }, [])
  return (
    <>      
      <h1>{detailHeading}</h1>
      <StarRating />
    </>
  )
};

export default Detail;
