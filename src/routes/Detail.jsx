import { useEffect } from "react";
import {useParams} from "react-router-dom";
import { useGlobalContext } from "../context";

const Detail = () => {
  const {id} = useParams();
  const {detailHeading, getSingleRestaurant} = useGlobalContext();
  useEffect(() => {
    getSingleRestaurant(id);
  }, [])
  return (
    <>
      <div>Detail</div>
      <h1>{detailHeading}</h1>
    </>
  )
};

export default Detail;
