import { NavLink, Outlet } from "react-router-dom";

const Dashboard=({ title })=>{
    return(
        <>
        <Helmet>
        <title>{title}</title>
      </Helmet>
        <div>
            <div className="flex justify-center">
            <div className="bg-violet-900 p-10 rounded-2xl">
                <h2  className="flex justify-center text-4xl font-bold mt-14 mb-9 text-white">Dashboard</h2>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-6 justify-center mt-8">
                    
                <NavLink to="cartlist" className="bg-white w-20 rounded-2xl p-2">Cart List</NavLink>
                <NavLink to="wishlist" className=" border border-white w-20 rounded-2xl p-2 text-white">Wishlist</NavLink>

                </div >
            </div>

            </div>
            
            <div>
                <Outlet></Outlet>

            </div>

        </div>
        </>
        
    )
}
export default Dashboard;