

import { useContext, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { GadgetContext } from "../Root/Root";
import { Helmet } from "react-helmet";

const Cartlist = ({title}) => {
    const { cartItem, setCartItem } = useContext(GadgetContext); 
    const [sortedCart, setSortedCart] = useState(cartItem);

   
    const totalPrice = sortedCart.reduce((sum, item) => sum + item.price, 0);

    
    const sortByPriceDescending = () => {
        const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
        setSortedCart(sorted);
    };

    
    const openModal = () => {
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
    };

    
    const clearCart = () => {
        setCartItem([]); 
        setSortedCart([]); 
        const modal = document.getElementById('my_modal_5');
        modal.close(); 
    };

    
    const removeItemFromCart = (productId) => {
        const updatedCart = sortedCart.filter(item => item.product_id !== productId);
        setSortedCart(updatedCart);
        setCartItem(updatedCart); 
    };

    return (
        <>
         <Helmet>
        <title>{title}</title>
      </Helmet>
        <div className="flex justify-center">
            <div className="w-2/3 p-14">
                <div className="flex justify-between">
                    <h3 className="text-3xl font-bold mb-7">Cart</h3>
                    <div className="flex justify-between items-center gap-5">
                        <h4 className="   font-bold ">Total Cost: $ {totalPrice.toFixed(2)}</h4>
                        <button className="border border-violet-900 text-violet-900 p-3 rounded-xl" onClick={sortByPriceDescending}>Sort by Price</button>
                        <button className="bg-violet-700 p-3 text-white rounded-2xl " onClick={openModal}>Purchase</button>
                    </div>
                </div>

                <ul className="w-full">
                    {sortedCart.map((item, index) => (
                        <li key={index} className="">
                            <div className="flex justify-between items-center border border-zinc-700 rounded-xl p-4 mb-7">
                                <div className="flex justify-between gap-14">
                                    <div>
                                        <img className="w-44" src={item.product_image} alt="" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl">{item.product_title}</h4>
                                        <p>{item.Specification[2]}</p>
                                        <p className="font-bold">$ {item.price}</p>
                                    </div>
                                </div>
                                <div>
                                    <AiOutlineClose 
                                        className="text-red-700 font-bold text-3xl cursor-pointer" 
                                        onClick={() => removeItemFromCart(item.product_id)} 
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* Modal */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Congratulations on your purchase!
                        </h3>
                        <p className="py-4">Here are the items you purchased:</p>
                        <ul className="list-disc list-inside">
                            {sortedCart.map((item) => (
                                <li key={item.product_id}>{item.product_title}</li>
                            ))}
                        </ul>
                        <p className="mt-4 font-bold">Total Amount: $ {totalPrice.toFixed(2)}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={clearCart}>
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
        </>
       
    );
};

export default Cartlist;

