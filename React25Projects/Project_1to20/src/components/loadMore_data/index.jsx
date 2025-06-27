import React, { useEffect } from "react";
import { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
const LoadMoreData = () => {
    const [products, setProducts] = useState([]);
    const [count, SetCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    const fetchData = async () => {
        try {

            const skip = count * 10
            const res = await fetch(`https://dummyjson.com/products?limit=12&skip=${
                count === 0 ? 0 : skip
                }`);
            const data = await res.json();

                setProducts((prevData) => [...prevData, ...data.products]);
           

        } catch (error) {
            console.log("Error Occured", error);
        }

    };

    useEffect(() => {
        fetchData();
    }, [count]);

    useEffect(() => {
        if (products.length === 100) {
            setDisableBtn(true)
        };
    })

    console.log(products);

    console.log(count);


    //   const handleClick = () => {
    //     SetCount(count + 1);
    //     setLoad(!load);
    //     console.log(load);
    //   };

    return (
        <div>
            <div className="">
                <div className="flex flex-wrap gap-4 justify-center items-center mx-auto">

                    {
                        products.length > 0 ? (
                            products.map((items) => {
                                return <div className="flex flex-col  border border-gray-400" key={items.id}>
                                    <img src={items.thumbnail} alt={items.title} />
                                    <p className="text-md ps-2">{items.title}</p>
                                </div>
                            })
                        ) : (
                            <p>No products found</p>
                        )
                    }
                    <div>
                        <button
                            disabled={disableBtn}
                            onClick={() => SetCount(count + 1)}
                            className="bg-slate-500 rounded-3xl px-2 py-1.5 text-2xl mt-4">
                            Click to Load more Products
                        </button>
                        {
                            disableBtn ? <p className="text-center text-2xl text-gray-500">You have reached the end</p> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadMoreData;
