import { useContext, createContext, useState } from "react";
import YelpyTheYelpClone from "./apis/YelpyTheYelpClone";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {  

  // restaurants list
  const [restaurants, setRestaurants] = useState(() => []);

  // fetching restaurants list from backend
  const fetchData = async () => {
    try {
      const response = await YelpyTheYelpClone.get("/");           
      setRestaurants(response.data.data);      
    } catch (err) {
      console.log(err);
    } 
  };

  // add restaurant logic

  const [name, setName] = useState(() => "");
  const [location, setLocation] = useState(() => "");
  const [priceRange, setPriceRange] = useState(() => "Price range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await YelpyTheYelpClone.post('/', {
        name,
        location,
        price_range: priceRange
      })
      setRestaurants(prevRestaurants => [...prevRestaurants, response.data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  // delete restaurant logic

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await YelpyTheYelpClone.delete(`/${id}`);      
      setRestaurants(prevRestaurants =>
        prevRestaurants.filter(item => item.restaurant_id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // update restaurant logic

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    window.open(`/restaurants/${id}/update`, "_self");
  }

  const [updateName, setUpdateName] = useState(() => "");
  const [updateLocation, setUpdateLocation] = useState(() => "");
  const [updatePriceRange, setUpdatePriceRange] = useState(() => "Price range");

  // TODO figure out how to trigger refresh of homepage on submitupdate restaurant
  // for now use workflow with switching pages in the same tab
  const handleUpdateSubmit = async (e, id) => {
    e.preventDefault();    
    try {
      await YelpyTheYelpClone.put(`/${id}`, {
        name: updateName,
        location: updateLocation,
        price_range: updatePriceRange
      })
      window.open("/", "_self");   
    } catch (err) {
      console.log(err);
    }
  }

  // if we would use context instead of retrieving
  // values from backend, that could lead to errors
  // if user would go to the page directly, not from homepage
  const getRestaurantForUpdate = async (id) => {
    try {
      const response = await YelpyTheYelpClone.get(`/${id}`);      
      const {name, location, price_range} = response.data.data;
      setUpdateName(name);
      setUpdateLocation(location);
      setUpdatePriceRange(price_range);
    } catch (err) {
      console.log(err);
    }
  }

  // restaurant details functionality

  const handleRestaurantSelect = (id) => {
    window.open(`/restaurants/${id}`, "_self");
  }

  // later probably change this to selectedRestaurant
  // state variable, which will store all data from response
  const [detailHeading, setDetailHeading] = useState(() => "");

  const getSingleRestaurant = async (id) => {
    try {
      const response = await YelpyTheYelpClone.get(`/${id}`);
      const {name} = response.data.data;
      setDetailHeading(name);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{       
        fetchData,
        restaurants,
        name,
        location,
        priceRange,
        setName,
        setLocation,
        setPriceRange,
        handleSubmit,
        handleDelete,
        handleUpdate,
        updateName,
        updateLocation,
        updatePriceRange,
        setUpdateName,
        setUpdateLocation,
        setUpdatePriceRange,
        handleUpdateSubmit,
        getRestaurantForUpdate,
        handleRestaurantSelect,
        detailHeading,
        getSingleRestaurant,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default AppContext;
