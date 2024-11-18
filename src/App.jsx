// react router
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// pages import
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
