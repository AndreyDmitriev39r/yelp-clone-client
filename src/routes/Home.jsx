import Header from "../components/homepage/Header";
import AddRestaurants from "../components/homepage/AddRestaurants";
import RestaurantsList from "../components/homepage/RestaurantsList";

const Home = () => {
  return (
    <div>
      <Header />
      <AddRestaurants />
      <RestaurantsList />
    </div>
  )
};

export default Home;
