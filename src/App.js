import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom"; // Switch to HashRouter
import "./App.css";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Home from "./Home";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";

function App() {
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <HashRouter> {/* Use HashRouter here */}
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home snacks={snacks} drinks={drinks} />
          </Route>
          <Route exact path="/snacks">
            <FoodMenu items={snacks} title="Snacks" />
          </Route>
          <Route exact path="/drinks">
            <FoodMenu items={drinks} title="Drinks" />
          </Route>
          <Route path="/snacks/:id">
            <FoodItem items={snacks} cantFind="/snacks" />
          </Route>
          <Route path="/drinks/:id">
            <FoodItem items={drinks} cantFind="/drinks" />
          </Route>
          <Route path="*">
            <p>Page not found!</p>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
