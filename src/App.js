import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import AddProduct from "./components/AddProduct/AddProduct";
import Products from "./components/Products/Products";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/product/add">
              <AddProduct />
            </Route>
            <Route path="/product/update/:id">
              <UpdateProduct />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
