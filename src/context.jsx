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

  return (
    <GlobalContext.Provider
      value={{       
        fetchData,
        restaurants,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default AppContext;
