import Gadgets from '../Gadgets/Gadgets';
import BannerImg from '../../assets/banner.jpg';


const Homes = () => {
    return (
        <div className="w-screen">
            <div className="flex items-center justify-center w-full">
                <div className="relative w-screen">
                    <div className="bg-violet-900 absolute w-full">
                        <h2 className="text-3xl flex mt-10 justify-center text-white">
                            Upgrade Your Tech Accessories with Gadget Heaven
                        </h2>
                        <p className="text-white flex justify-center mt-5">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className="flex justify-center mt-6">
                            <button className="btn mb-44">Shop Now</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center top-52 relative">
                        <div className="w-1/5 flex items-center justify-center shadow-2xl bg-blue-300 rounded-xl">
                            <img 
                                className="flex items-center justify-center p-2 rounded-xl "
                                src={BannerImg}
                                alt="Banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-52 flex justify-center text-3xl font-bold">
                <h3>Explore Cutting-Edge Gadgets</h3>
            </div>
            <div className="flex justify-around mt-6 ">
                <div className="grid grid-cols-1 gap-4 absolute  left-20">
                    {/* <button className="btn btn-active btn-accent">All products</button>
                    <button className="btn btn-active btn-accent">Laptop</button>
                    <button className="btn btn-active btn-accent">Phones</button>
                    <button className="btn btn-active btn-accent">Accessories</button>
                    <button className="btn btn-active btn-accent">Smart Watch</button>
                    <button className="btn btn-active btn-accent">MacBook</button>
                    <button className="btn btn-active btn-accent">iPhone</button> */}
                </div>
                <div>
                    {
                       
                       <Gadgets></Gadgets>
                    }
                </div>
            </div>
        </div>
    );
};

export default Homes;
