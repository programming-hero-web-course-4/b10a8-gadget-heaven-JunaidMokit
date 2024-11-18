import { Link, useLoaderData } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useContext } from "react";
import { GadgetContext } from "../Root/Root";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaStar } from "react-icons/fa";


const GadgetDetails = () => {
  const gadget = useLoaderData();
   

  const {setCartItem,setWishItem}=useContext(GadgetContext);

  const addToCart = (gadget) => {
    setCartItem((prev) => [...prev, gadget]); 
    toast.success("Item added to cart!", {
      position: "top-center", 
      autoClose: 1000, 
    });
    
};

const addToWishlist = (gadget) => {
    setWishItem((prev) => [...prev, gadget]); 
    toast.info("Item added to wishlist!", {
      position: "top-center",
      autoClose: 1000,
    });
};
  
 

  if (!gadget) {
    return <div>Loading...</div>;
  }

  return (

    <div className="relative h-screen ">
       <ToastContainer />
      
     
  {/* Top Content */}
  <div className="flex flex-col justify-center items-center pt-16 bg-violet-900 p-40">
    <h1 className="text-5xl font-bold text-white">Product Details</h1>
    <p className="text-center mt-8 mb-16 text-white mb-9">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
    </p>
  </div>

  {/* Bottom Content */}
  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center items-center  mt-10">
    <div className="w-2/3 bg-white shadow-lg p-8 rounded-lg flex bg-slate-300">
      <div className="flex justify-center">
        <img className="w-2/3" src={gadget.product_image} alt={gadget.product_title} />
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold">{gadget.product_title}</h2>
        <p className="mt-4">{gadget.description}</p>
        <p className="mt-2 text-lg font-semibold">Price: ${gadget.price}</p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">In stock</button>
        <h5 className="mt-6 text-xl font-bold">Specification</h5>
        <ol className="list-decimal list-inside text-left mt-2">
          {gadget.Specification.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ol>
        <div className="flex items-center gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                    ))}
                   </div>
        <div className="flex items-center  mt-5 ">
           {/* <Link className="flex font-bold"> Add to Cart  <MdShoppingCart style={{ fontSize: 30 }} /></Link>
           <Link  >  <FavoriteIcon style={{ fontSize: 30 }} /> </Link> */}
             <button
                className="flex font-bold text-white bg-violet-500 rounded-xl p-2 mr-10"
                onClick={()=>addToCart(gadget)}
              >
                Add to Cart <MdShoppingCart style={{ fontSize: 30 }} />
                
              </button>
              <button className="text-2xl rounded-full border border-gray-400 p-2" onClick={() => addToWishlist(gadget)}>
                <FavoriteIcon style={{ fontSize: 30 }} />
              </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default GadgetDetails;
