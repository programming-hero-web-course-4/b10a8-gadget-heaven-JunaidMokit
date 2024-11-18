import { Link } from "react-router-dom";



const Gadget=({gadget})=>{
    // const {product_image,product_title,price}=gadget;
    const { product_image,product_title,price,product_id } = gadget ||{} // fallback to an empty object if 'gadget' is undefined

  if (!product_image) {
    return <div>No product image available</div>;
  }
    return(
        <div>
            <div className="p-8 shadow-xl bg-white ">
                <img className="w-36 " src={product_image} alt="Gadget" />
                <p className="font-bold mt-1 ">{product_title}</p>
                <p className="mt-1 mb-1">${price}</p>
                {/* <NavLink 
                  // Link to dynamic route 
                  className="p-1 rounded-xl border border-violet-700"
                  >Show Details</NavLink> */}
                  
                  <Link className=" border font-bold border-violet-600 rounded-xl p-1 mt-1 text-violet-600" to={`/${product_id}`}>Show Details</Link>


            </div>


        </div>
    )
}
export default Gadget;