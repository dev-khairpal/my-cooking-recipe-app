// react router
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// pages import
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import ThemeSelector from "./components/ThemeSelector";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  useEffect(() => {
    // Dynamically apply the class to the body tag
    document.body.className = mode;
  }, [mode]);
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
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
