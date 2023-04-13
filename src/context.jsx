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

  const handleDelete = async (id) => {
    try {
      await YelpyTheYelpClone.delete(`/${id}`);      
      setRestaurants(prevRestaurants =>
        prevRestaurants.filter(item => item.restaurant_id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // update restaurant logic

  const handleUpdate = (id) => {
    window.open(`/restaurants/${id}/update`, '_blank');
  }

  const [updateName, setUpdateName] = useState(() => "");
  const [updateLocation, setUpdateLocation] = useState(() => "");
  const [updatePriceRange, setUpdatePriceRange] = useState(() => "Price range");

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log(updateName, updateLocation, updatePriceRange);
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default AppContext;
