import React from 'react'
import { useState } from 'react';

const RandomColor = () => {
    //    const [enableHex, setEnableHex] = useState(false)
    //    const [enableRgb, setEnableRgb] = useState(false)
    //    const [enableRandom, setEnableRandom] = useState(true)

    const [colorType, setColortype] = useState('random')

    //Hex Code
    const [hex, setHex] = useState('#d0d3d7');
    const handleHexColorChange = () => {
        const HexNumber = Math.floor(Math.random() * 9005555).toString(16);
        const newhex = `#${HexNumber}`;
        setHex(newhex);
        setColortype('hex')
        console.log(hex);
    }

    //RGB Code
    const [rgb, setRgb] = useState('rgb(0, 0, 0)');
    const handleRGBColorChange = () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const newRgb = `rgb(${r},${g},${b})`;
        setRgb(newRgb);
        setColortype('rgb')
        console.log(rgb);
    }
    // Random Generator 
    const [random, setRandom] = useState('#ffffff')
    const handleRandomColorChange = () => {
        const RanNumber = Math.floor(Math.random() * 9005555).toString(16);
        const newRan = `#${RanNumber}`;
        setRandom(newRan)
    }

    const bgColorHandler = () => {
        if (colorType === 'hex') return hex;
        if (colorType === 'rgb') return rgb;
        if (colorType === 'random') return random;
    }

    return (
        <div
            style={{ backgroundColor: bgColorHandler(), height: '500px', width: '100vw' }}>
            <div className='flex flex-col mt-5 justify-center items-center'>
                <div className='flex flex-wrap gap-4'>
                    <button
                        onClick={() => {
                            handleHexColorChange();
                            // setEnableHex(!enableHex)
                        }}
                        className='px-4 py-2 bg-indigo-600 text-white rounded-2xl'>Generate Hex</button>
                    <button
                        onClick={() => {
                            handleRGBColorChange();
                            // setEnableRgb(!enableRgb)
                        }}
                        className='px-4 py-2 bg-indigo-600 text-white rounded-2xl'>Generate RGB</button>
                    <button
                        onClick={() => {
                            handleRandomColorChange()
                            // setEnableRandom(!enableRandom)
                        }}
                        className='px-4 py-2 bg-indigo-600 text-white rounded-2xl'>Generate Random</button>
                </div>
                <div className='mt-30'>

                    {colorType === 'hex' && <h1 className='text-[50px]'>{hex}</h1>}
                    {colorType === 'rgb' && <h1 className='text-[50px]'>{rgb}</h1>}
                    {
                        colorType === 'random' && <h1 className='text-[50px]'>{random}</h1>
                    }

                </div>
            </div>
        </div>
    )
}

export default RandomColor