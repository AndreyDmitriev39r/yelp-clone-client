import { useContext, createContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({children}) => {
  const [restaurants, setRestaurants] = useState(() => []);
  return (
    <GlobalContext.Provider
      value={{
        restaurants,
        setRestaurants,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
};

export default AppContext;
