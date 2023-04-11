import { useEffect } from "react";
import { useGlobalContext } from "../../context";

import TableRow from "./TableRow";

const RestaurantsList = () => {  

  const {fetchData, restaurants} = useGlobalContext();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="list-group">
      <table className="table table-dark table-hover">
        <thead className="bg-primary">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>          
        </thead>
        {/* dummy rows */}
        <tbody>
          {restaurants.length && restaurants.map(item =>
            <TableRow
              key={item.restaurant_id}
              name={item.name}
              location={item.location}
              priceRange={item.price_range}
            />
          )}
          {/* <tr>
            <td>Mac</td>
            <td>here</td>
            <td>3</td>
            <td>5</td>
            <td>upd</td>
            <td>del</td>
          </tr>
          <tr>
            <td>kfc</td>
            <td>there</td>
            <td>1</td>
            <td>1</td>
            <td>upd</td>
            <td>del</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
};

export default RestaurantsList;