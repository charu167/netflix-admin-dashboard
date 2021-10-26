import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import List from "./pages/List/List";
import SingleList from "./pages/single list/SingleList";
import NewList from "./pages/newList/NewList";

import { AuthContext } from "./context/authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/users">
                <UserList />
              </Route>

              <Route path="/user/:userId">
                <User />
              </Route>

              <Route path="/newUser">
                <NewUser />
              </Route>

              <Route path="/movies">
                <ProductList />
              </Route>

              <Route path="/product/:productId">
                <Product />
              </Route>

              <Route path="/newProduct">
                <NewProduct />
              </Route>

              <Route path="/lists">
                <List />
              </Route>

              <Route path="/list/:listId">
                <SingleList />
              </Route>

              <Route path="/newList">
                <NewList />
              </Route>
            </div>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
