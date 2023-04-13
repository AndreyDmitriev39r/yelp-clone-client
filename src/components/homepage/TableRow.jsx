import { useGlobalContext } from "../../context";
// import { useNavigate } from "react-router-dom";

const TableRow = ({name, location, priceRange ,id}) => {
  const {handleDelete, handleUpdate, handleRestaurantSelect} = useGlobalContext();
  // const navigate = useNavigate();
  // context.jsx is not a descendant of Routes in the setup, thus useNavigate
  // can not be used in the context
  // and functionality relying on useNavigate established here, in component which is Routes descendant
  // const handleUpdate = (id) => {
  //   navigate(`/restaurants/${id}/update`);
  // }

  // we are using stoppropagation in handleUpdate and handleDelete functions
  // to avoid mess between handleRestaurantSelect event and events for button clicks
  return (
    <tr onClick={() => handleRestaurantSelect(id)}>
      <td>{name}</td>
      <td>{location}</td>
      <td>{"$".repeat(priceRange)}</td>
      <td>dummy ratings</td>
      <td><button className="btn btn-warning" onClick={(e) => handleUpdate(e, id)}>Update</button></td>
      <td><button className="btn btn-danger" onClick={(e) => handleDelete(e, id)}>Delete</button></td>
    </tr>
  )
}

export default TableRow;