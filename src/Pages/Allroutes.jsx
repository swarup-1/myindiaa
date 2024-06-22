import {Routes,Route} from "react-router-dom";
import NotFound from "./NotFound";
import Cart from "./Cart";
import Home from "./Home";
import Products from "./Products";
export const Allroutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path= "*" element={<NotFound/>}  />
        </Routes>
    )
}