import {RiDeleteBin6Line} from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import {remove} from "../redux/Slices/CartSlice";


export default function CartItem({item, itemIndex}) {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.success("Item Removed");
    }

    
    return (
        <div className="flex items-center p-2 md:p-5 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5">
            <div className="w-full h-full flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
                <div className="w-[30%]">
                    <img src={item.image} className="object-cover" alt="" />
                </div>

                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                    <h2 className="text-xl text-slate-700 font-semibold">
                        {item.title}
                    </h2>
                    <p className="text-base text-slate-700 font-medium">
                        {item.description.split(" ").slice(0,15).join(" ") + "..."}
                    </p>

                    <div className="flex justify-between items-center">
                        <p className="font-bold text-lg text-green-600">
                            ${item.price}
                        </p>
                        <div className="bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3" onClick={removeFromCart}>
                            <div className="text-red-800 group-hover:text-white">
                                <RiDeleteBin6Line />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
}