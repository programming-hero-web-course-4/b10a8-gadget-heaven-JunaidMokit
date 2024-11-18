import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Component/Home/Home";

import Root from "./Component/Root/Root";
import GadgetDetails from "./Component/GadgetDetails/GadgetDetails";
import Dashboard from "./Component/Dashboard/Dashboard";
import Cartlist from "./Component/Cartlist/Cartlist";
import Wishlist from "./Component/Wishlist/Wishlist";
import NotFound from "./Component/NotFound/NotFound";
import Support from "./Component/Support/Support";




const router = createBrowserRouter([
  {
    // path: "/",
    // element: <Home />,
    // children:[
    //   {
    //     path:'/',
    //     element:<Nav></Nav>
    //   }
    // ],
    path:'/',
    element:<Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
      },
      {
        path: "/:product_id",
        element: <GadgetDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/item.json");
          if (!response.ok) throw new Error("Failed to fetch items");
      
          const data = await response.json();
          const gadget = data.find((item) => String(item.product_id) === params.product_id); 
      
          if (!gadget) throw new Error("Gadget not found");
          
          return gadget;
        },
      
      },
      {
        path:'Dashboard',
        element:<Dashboard title="GadgetHub|Dashboard"/>,
        children:[
          {
            index: true,  
            element: <Cartlist title="GadgetHub|Cartlist"/>,
          },
          {
            path:'cartlist',
            element:<Cartlist title="GadgetHub|Cartlist"/>

          },
          {
            path:'wishlist',
            element:<Wishlist title="GadgetHub|Wishlist" />,

          }
        ]
      },
      {
        path:'Support',
        element: <Support title="GadgetHub|Support" />,
      }

      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
