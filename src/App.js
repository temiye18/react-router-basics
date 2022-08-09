import { Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductsDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
