 import Product from "./pages/Product";
import Home from "./pages/Home";
 import ProductList from "./pages/ProductList";
 import Register from "./pages/Register";
 import Login from "./pages/Login";
 import Cart from "./pages/Cart";
 import Success from "./pages/Success";
 import Products from "./components/Products ";
 import { useSelector } from "react-redux";
 
import {BrowserRouter as Router , Route, Routes , Navigate} from 'react-router-dom'

const  App =()=> {
  const user = useSelector((state) => state.user.currentUser);
  return (
 <Router>
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route  path="/products/:category" element={<ProductList/>}/>
    <Route  path="/products" element={<Products/>}/>
    <Route  path="/product/:id" element={<Product/>}/>
    {/* <Route  path="/register" element={<Register/>}>
       {user ? <Navigate replace to="/" /> : <Register />} 
      </Route> */}
      <Route  path="/register" element={
           user
          ? <Navigate to='/'/> 
          : <Register />
        } />

        <Route  path="/login" element={
           user
          ? <Navigate to='/'/> 
          : <Login />
        } />
    {/* <Route  path="/login" element={<Login/>}>
       {user ? <Navigate replace to="/" /> : <Login />} 
      </Route> */}
    <Route  path="/cart" element={<Cart/>}/>
    <Route  path="/success" element={<Success/>}/>
  </Routes>
 </Router>

  );
}

export default App;
