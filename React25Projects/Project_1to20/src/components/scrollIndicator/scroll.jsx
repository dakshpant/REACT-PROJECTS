import React, { useCallback, useEffect } from 'react'
import { useState } from 'react';
const Scroll = () => {
    const [dataItem, setDataItem] = useState([]);
    const [erroeMessage, setErrorMessage] = useState("");
    const [scrollPercent, setScrollPercent] = useState(0)

    const url = 'https://dummyjson.com/products?limit=100'
    const fetchData = async () => {

        try {

            const response = await fetch(url);
            const data = await response.json();

            // data && data.products.length && data.products.length > 0 ?
            //     setData(data.products) : null
            if (data && data.products.length && data.products.length > 0) {
                setDataItem(data.products)
                console.log(data);

                console.log(dataItem);

            }
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message)

        }
    }
    console.log();


    useEffect(() => {
        fetchData(url)
    }, [url])

    console.log()

    const setScroll = useCallback(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        const maxHeight = scrollHeight - clientHeight;
        const scrolledPercentage = (scrollTop / maxHeight) * 100
        setScrollPercent(scrolledPercentage)
    }, [])

    useEffect(() => {
        console.log(dataItem);

    }, [dataItem])

    useEffect(() => {
        window.addEventListener("scroll", setScroll);
        // Cleanup
        return () => window.removeEventListener("scroll", setScroll)
    }, [setScroll])

    return (
        <div className='text-center my-10' onScroll={() => setScroll()}>
            <div className=' '>
                <div className=' w-[15px] h-full fixed top-0 z-10 bg-cyan-950'>
                    <div className='w-[15px] bg-cyan-400'
                        style={{ height:`${ scrollPercent }%`}}></div>
                </div>
            </div>
            <div>
                <h1 className='text-5xl'>Scroll Indicator</h1>
                {
                    dataItem?.map((item, index) =>
                        <p key={index}>{item.title}</p>
                    )
                }
            </div>
        </div>
    )
}

export default Scroll