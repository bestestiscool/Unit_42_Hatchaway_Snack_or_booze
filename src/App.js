import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Home from "./Home";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";

function App() {
  // State to store the snacks and drinks data
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Fetch the snacks and drinks from the API when the app starts
  useEffect(() => {
    async function fetchData() {
      let snacks = await SnackOrBoozeApi.getSnacks(); // Fetch snacks
      let drinks = await SnackOrBoozeApi.getDrinks(); // Fetch drinks
      setSnacks(snacks); // Set snacks data
      setDrinks(drinks); // Set drinks data
      setIsLoading(false); 
    }
    fetchData();
  }, []); // The empty array ensures this runs only once when the component mounts

  // Show a loading message while waiting for data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar /> 
        <Switch>
          <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
          </Route>
          {/* Route for the snacks list */}
          <Route exact path="/snacks">
            <FoodMenu items={snacks} title="Snacks" />
          </Route>
          {/* Route for the drinks list */}
          <Route exact path="/drinks">
            <FoodMenu items={drinks} title="Drinks" />
          </Route>
          {/* Route for an indiviual snack */}
          <Route path="/snacks/:id">
            <FoodItem items={snacks} cantFind="/snacks" />
          </Route>
          {/* Route for an individual drink */}
          <Route path="/drinks/:id">
            <FoodItem items={drinks} cantFind="/drinks" />
          </Route>
          {/* For any undefined routes */}
          <Route>
            <p>Page not found!</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
