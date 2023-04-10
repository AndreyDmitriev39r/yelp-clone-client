const AddRestaurants = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="name"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="location"/>
          </div>
          <div className="col">
            <select className="custom-select mr-2">
              <option disabled>Price range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button className="btn-primary btn">Add</button>
        </div>
      </form>
    </div>
  )
};

export default AddRestaurants;