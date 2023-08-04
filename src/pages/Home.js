import { useEffect, useState } from "react";

import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { Helmet } from "react-helmet";
import { titles } from "../titles";

export default function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);

    const [items, setItems] = useState([]);

    async function fetchProductData() {
        setLoading(true);

        try {
            const result = await fetch(API_URL);
            const data = await result.json();

            setItems(data);
        } catch (error) {
            console.log("Error in API call in Home.js");
            // Reset data to default
            setItems([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            <Helmet>
                <title>{titles.Home}</title>
            </Helmet>
            {loading ? (
                <div className="flex justify-center items-center h-full mt-[38vh]">
                    <Spinner />
                </div>
            ) : items.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-14">
                    {items.map((item) => (
                        <Product item={item} key={item.id} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <p>No Data Found</p>
                </div>
            )}
        </div>
    );
}
