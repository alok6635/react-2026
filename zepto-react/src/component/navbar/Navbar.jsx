import { NavLink } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex">
        <div className="logo"><NavLink to="/"> <strong>Z</strong><span>aptro</span></NavLink>

         <div className="logo_detail flex"><FaMapMarkerAlt/>
           <h5>Add Address</h5>
         </div>
         </div>
        <ul className="flex nav_content">
          <li><NavLink to="/" className={({isActive})=>isActive ? "active":""}>Home</NavLink></li>
          <li><NavLink to="/products" className={({isActive})=> isActive ? "active" :""}>Products</NavLink></li>
          <li><NavLink to="/about" className={({isActive})=> isActive ? "active": ""}>About</NavLink></li>
          <li><NavLink to="/contact" className={({isActive})=> isActive ? "active" : ""}>Contact</NavLink></li>
          <li className="cart_count"> <IoIosCart aria-label="Cart" /> <span>1</span></li>
          <li><button className="btn">Sign In</button></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
