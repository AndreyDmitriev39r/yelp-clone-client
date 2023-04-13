import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";

const UpdateRestaurant = () => {

  const {id} = useParams();
  const {
    updateName, updateLocation, updatePriceRange,
    setUpdateName, setUpdateLocation, setUpdatePriceRange, handleUpdateSubmit,
    getRestaurantForUpdate,
  } = useGlobalContext();

  useEffect(() => {
    getRestaurantForUpdate(id);
  }, []);

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" className="form-control" value={updateLocation}
            onChange={(e) => setUpdateLocation(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price-range">Price range</label>
          <select id="price-range" className="custom-select" value={updatePriceRange}
            onChange={(e) => setUpdatePriceRange(e.target.value)}>
              <option disabled>Price range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => handleUpdateSubmit(e, id)}>Update</button>
      </form>
    </div>
  )
};

export default UpdateRestaurant;
