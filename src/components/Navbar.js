import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";


export default function Navbar() {

    const {cart} = useSelector((state) => state);

    return (
        <div>
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/" className="ml-5">
                    <img src="logo.png" alt="" className="h-14" />
                </NavLink>

                <div className="flex items-center mr-5 space-x-6 text-slate-100 font-medium">
                    <NavLink to="/">
                        <p>
                            Home
                        </p>
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="flex items-center relative">
                            <FaShoppingCart className="text-2xl hover:text-green-400 transition duration-100 ease-in" /> 
                            {   cart.length>0 &&
                                <div className="bg-green-600 rounded-full h-5 w-5 p-1 flex justify-center items-center -top-1 -right-2 animate-bounce absolute">
                                    <span className="text-xs text-white">{cart.length}
                                    </span>
                                </div>
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
        
    );
}