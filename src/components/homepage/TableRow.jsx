const TableRow = ({name, location, priceRange}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{location}</td>
      <td>{"$".repeat(priceRange)}</td>
      <td>dummy ratings</td>
      <td><button className="btn btn-warning">Update</button></td>
      <td><button className="btn btn-danger">Delete</button></td>
    </tr>
  )
}

export default TableRow;