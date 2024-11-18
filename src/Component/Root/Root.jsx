import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { createContext, useState } from "react";
import Footer from "../Footer/Footer";




export const GadgetContext=createContext();


const Root=()=>{
    const [cartItem,setCartItem]=useState([]);
    const [wishItem,setWishItem]=useState([]);
    return(
         <div>
            <GadgetContext.Provider value={{cartItem,setCartItem,wishItem,setWishItem}} >
               <Nav></Nav>
          
               <Outlet></Outlet>

            </GadgetContext.Provider>
            <Footer></Footer>
          
          
         </div>
        
    )
}
export default Root;