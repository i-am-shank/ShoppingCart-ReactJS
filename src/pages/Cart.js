import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { titles } from "../titles";

export default function Cart() {
    const { cart } = useSelector((state) => state);

    const [totalAmount, setTotalAmount] = useState(0);

    // Update Total-amount, whenever anything changes in cart (dependency)

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
        // 2nd arg of reduce() => initial-value
    }, [cart]);

    return (
        <div>
            <Helmet>
                <title>{titles.Cart}</title>
            </Helmet>
            {cart.length > 0 ? (
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
                    <div className="w-full h-full flex flex-col md:flex-row">
                        <div className="w-full md:w-[60%] flex flex-col p-2">
                            {cart.map((item, index) => (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    itemIndex={index}
                                />
                            ))}
                        </div>

                        <div className="w-full md:w-[40%] mt-5 flex flex-col">
                            <div className="h-full flex flex-col p-5 gap-5 my-14 justify-between">
                                <div className="flex flex-col gap-5">
                                    <div className="font-semibold text-xl text-green-800 uppercase">
                                        Your Cart
                                    </div>
                                    <div className="font-semibold text-5xl text-green-700 -mt-5 uppercase">
                                        Summary
                                    </div>
                                    <p className="text-xl">
                                        <span className="text-gray-700 font-semibold text-xl">
                                            Total Items
                                        </span>
                                        : {cart.length}
                                    </p>
                                </div>

                                <div className="text-xl font-bold">
                                    <p>
                                        <span className="text-gray-700 font-semibold mr-1">
                                            Total Amount
                                        </span>
                                        : ${totalAmount}
                                    </p>
                                    <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl w-full">
                                        Checkout Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-[80vh] flex flex-col items-center justify-center">
                    <h1 className="text-gray-700 font-semibold text-xl mb-2">
                        Your Cart is Empty!
                    </h1>
                    <NavLink to={"/"}>
                        <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                            Shop Now
                        </button>
                    </NavLink>
                    <div className="fixed z-[99] pointer-events-none inset-[16px]"></div>
                </div>
            )}
        </div>
    );
}
