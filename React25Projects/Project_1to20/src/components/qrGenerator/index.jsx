import React from 'react'
import QRCode from "react-qr-code";
import { useState } from 'react';
const QrGenerator = () => {
  const [inputValue, setInputValue] = useState("");

  const isPhoneNo = /^\d{10,15}$/.test(inputValue);

   const qrValue = isPhoneNo
    ? `https://wa.me/${inputValue}`
    : inputValue;

  return (
    <div className='flex flex-col items-center gap-4 min-h-[200px] justify-center bg-gray-200'>
      <input
        className='border p-3 rounded-md shadow-sm w-2xs text-center'
        type="text"
        placeholder="Enter something to generate QR"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* {inputValue ? (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <QRCode value={qrValue} size={180} />
        </div>
      ) : (
        <p className='text-gray-500'>Enter something to generate QR</p>
      )} */}
      {inputValue ? (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
          <QRCode value={qrValue} size={180} />
          {isPhoneNo && (
            <p className="text-green-600 text-md mt-2">WhatsApp QR</p>
            
          )}
          {
            isPhoneNo ? (
              <p className="text-sm text-gray-500  text-center">
            {qrValue}
          </p>
            ) :
            (
              <p className="text-md text-red-600 mt-3  text-center">
                Link to The website
              </p>
            )
          }
        </div>
      ) : (
        <p className='text-gray-500'>Enter text, URL, or phone to generate QR</p>
      )}
    </div>
  )
}

export default QrGenerator