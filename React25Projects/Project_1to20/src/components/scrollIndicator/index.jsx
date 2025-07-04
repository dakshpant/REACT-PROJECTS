/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useCallback, useEffect } from 'react';
const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const url = 'https://dummyjson.com/products?limit=200';


  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);


const onnScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const maxHeight = scrollHeight - clientHeight;
    const scrolledPercent = (scrollTop / maxHeight) * 100;
    setScroll(scrolledPercent);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onnScroll);
    return () => {
      window.removeEventListener("scroll", onnScroll);
    };
  }, [onnScroll]);

  

  // const scrollString = Math.trunc(scroll);
  // console.log(scrollString);


  return (
      <div className=' my-10'
      onScroll={onnScroll}>
        <div className={`h-[10px] fixed top-0 z-10 w-full text-center color-white`}>
          <h1 className='text-center text-5xl '>Scroll List </h1>
          <div className='w-full h-[10px] bg-cyan-700'>
            <div className='w-fit h-2.5 bg-amber-700'
              style={{ width: `${scroll}%` }}></div>
          </div>
        </div>
        <div className="mt-24 ">
          {data && data.length > 0
            ? data.map((dataItem) => <p className=''>{dataItem.title}</p>)
            : null}
        </div>
      </div>
  )
}

export default ScrollIndicator


