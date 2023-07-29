import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {add, remove} from "../redux/Slices/CartSlice";


export default function Product({item}) {

    const {cart} = useSelector((state) => state);

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
        // Also show toast
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from cart");
    }

    return (
        <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 mt-10 ml-5 rounded-xl">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                    {item.title}
                </p>
            </div>
            <div>
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
                    {item.description.split(" ").slice(0,10).join(" ") + "..."}
                </p>
            </div>
            <div className="h-[180px]">
                <img src={item.image} className="h-full w-full object-contain" alt="" />
            </div>
            <div className="flex justify-between gap-4 items-center w-full mt-5">
                <p className="text-green-600 font-semibold ">
                    ${item.price}
                </p>

                {/* Checking if a item passed in cart (it) is equal to this current-item.. item in cart (show remove btn) , else (show add btn) */}
                {/* Also, show toast on click.. */}

                {
                    
                    cart.some((it) => 
                    it.id === item.id) ?
                    (<button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] py-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
                        Remove Item
                    </button>) :
                    (<button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] py-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in tracking-wide">
                        Add to Cart
                    </button>)
                }
            </div>
        </div>
    );
}