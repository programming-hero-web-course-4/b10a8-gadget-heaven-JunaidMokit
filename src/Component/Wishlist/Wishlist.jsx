
import { useContext } from "react";
import { GadgetContext } from "../Root/Root";
import { AiOutlineClose } from 'react-icons/ai';
import { Helmet } from "react-helmet";

const Wishlist = ({title}) => {
  const { wishItem } = useContext(GadgetContext);

  return (
    <>
    <Helmet>
        <title>{title}</title>
      </Helmet>

     <div className=" ">
      <div className="">
        <h3 className="text-3xl font-bold flex justify-center mt-9 mb-9">Wishlist</h3>
        <ul>
          {wishItem.map((item, index) => (
            <li key={index} className="flex justify-center  ">
                <div className="flex  justify-center w-full mt-6 ">
                    <div className=" flex justify-between w-2/3  shadow-white shadow-2xl border border-gray-400 p-3 rounded-2xl">
                        <div className="flex justify-evenly items-center ">
                           <div className="w-72">
                               <img className="w-full h-44 p-5"  src={item.product_image} alt="" />
                           </div>
                           <div className="w-1/2">
                               <h1 className="text-2xl font-bold mb-3">{item.product_title}</h1>
                               <p>Description: {item.description}</p>
                                <p className="font-bold mt-7 mb-4">Price:{item.price} </p>

                                <button  className="flex font-bold text-white bg-violet-500 rounded-xl p-2 mr-10" >Add to Cart   </button>

                             </div>
                        </div>
                        <div className="flex items-center">
                            
                            <AiOutlineClose 
                                        className="text-red-700 font-bold text-3xl cursor-pointer" 
                                         
                                    />
                        </div>
                   

                    </div>
                    
                </div></li> 
          ))}
        </ul>
      </div>
    </div>
    </>
    
  );
};

export default Wishlist;
