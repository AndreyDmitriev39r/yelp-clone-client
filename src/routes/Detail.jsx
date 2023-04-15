import { useEffect } from "react";
import {useParams} from "react-router-dom";
import { useGlobalContext } from "../context";

import Reviews from "../components/detail/Reviews";

const Detail = () => {
  const {id} = useParams();
  const {detailHeading, getSingleRestaurant} = useGlobalContext();
  useEffect(() => {
    getSingleRestaurant(id);
  }, [])
  return (
    <>      
      <h1 className="text-center">{detailHeading}</h1>
      <Reviews />
    </>
  )
};

export default Detail;
