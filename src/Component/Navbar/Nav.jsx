import { NavLink, Outlet ,useLocation} from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';



const Nav=()=>{
  const location = useLocation();

 
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-violet-900";
      case "/Statistics":
        return "bg-white";
      case "/Dashboard":
        return "bg-white";
      default:
        return "bg-white";
    }
  };


    return(
<div>
<div className={`${getBackgroundColor()} p-10`}>

<div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <NavLink to={'/'} className={({ isActive }) =>isActive ? "bg-blue-500 text-white px-4 py-2 rounded underline" : "px-4 py-2"}>Home</NavLink></li>
      <li>
         <NavLink to={'/Statistics'} className={({ isActive }) =>isActive ? "bg-blue-500 text-white px-4 py-2 rounded underline" : "px-4 py-2"}>Statistics</NavLink>
      </li>
      <li><NavLink to={'/Dashboard'} className={({ isActive }) =>isActive ? "bg-blue-500 text-white px-4 py-2 rounded underline" : "px-4 py-2"}>Dashboard</NavLink></li>
      <li><NavLink to={'/Support'} className={({ isActive }) =>isActive ? "bg-blue-500 text-white px-4 py-2 rounded underline" : "px-4 py-2"}>Support</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end  ">
    <NavLink to={'Dashboard'}><button className="btn text-2xl rounded-full border border-gray-400 p-2"><FaShoppingCart /> </button></NavLink>
    <NavLink to={'Dashboard'}><button className="btn text-2xl rounded-full border border-gray-400 p-2 ml-4"><FaHeart /></button></NavLink>
  </div>
 
</div>
{/* Banner Part */}



</div>






</div>
        

    )
}
export default Nav;