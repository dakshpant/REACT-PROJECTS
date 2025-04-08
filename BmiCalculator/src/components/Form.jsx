import React, { useEffect, useRef } from 'react'
import user1 from '../assets/image/man.png'
import user2 from '../assets/image/guarani.png'
import { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import PopUp from './popUp';

const Form = () => {

    // const [color1, setColor1] = useState('')
    // const [color2, setColor2] = useState('')
    const [color, setColor] = useState('')

    const [isClicked, setIsClicked] = useState('bg-mainGreen')
    // const [isClickedWomen , setIsClickedWomen] = useState(false)
    

    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmi, setBmi] = useState(
        { bmiValue: '', bmiMessage: '' }
    )
    const dropValue = useRef(null)
    const [openPopUp, setOpenPopUp] = useState(false)
    const [data, setData] = useState('')

    // useEffect(() => {
    //     document.getElementById('bodyCol').style.backgroundColor = color;
    //     document.getElementById('bodyCol').style.backgroundColor = color;
    //     // setColor('')
    // }, [color]);
    // useEffect(() => {
       
    //     // setColor('')
    // }, [color]);

    // const colorChangeMan = ()=>{
    //     setColor('#0077b6')
    // }
    // const colorChangeWomen = ()=>{
    //     setColor('#bfdbfe')
    // }

    const handelManClick = ()=>{
        setIsClicked("bg-blue-200")
        console.log(isClicked);
        
    }
    const handelWomenClick = ()=>{
       setIsClicked("bg-pink-200")

    }

    let calcBmi = (e) => {
        const bmiResult = (weight / (height * height));
        let Message = '';

        e.preventDefault();
        if(weight == 0 || height == 0){
            Message = 'Please Enter Valid Input'
        } 
        else if (bmiResult < 18.5) {
            Message = 'You are Ku-Poshit';
        } else if (bmiResult < 24.9) {
            Message = 'Normal weight(Moj kar)';
        } else if (bmiResult < 29.9) {
            Message = 'Overweight(Kam Kha)';
        } else {
            Message = 'Your are Motu(Kitna Khayega)';
        }
        console.log(setBmi({ bmiValue: bmiResult.toFixed(2), bmiMessage: Message }))
    }
    const handleClick = () => {
        dropValue.current.click();
    }

    return (
        <div>
            <div
             className={` ${isClicked}`}>
                <div
                    className='flex justify-center gap-x-20'
                >
                    <div
                        className='pt-10 flex justify-center items-center gap-20'
                    >
                        <div
                            className='flex gap-x-6 justify-center items-center'
                        >
                            <img
                                className='w-40 h-40 rounded-full'
                                src={user1}
                                alt="profileImage"
                            />
                            <input
                                onClick={handelManClick}
                                className='h-auto transform scale-200'
                                type="radio"
                                name='radioBtn'
                                id='user1'
                            />
                        </div>
                        <div
                            className='flex gap-x-6 justify-center items-center'
                        >
                            <input
                                onClick={handelWomenClick}
                                className='h-auto transform scale-200'
                                type="radio"
                                name='radioBtn'
                                id='user2'
                            />
                            <img className='w-40 h-40 rounded-full' src={user2} alt="profileImage" />
                        </div>

                    </div>
                </div>
                <div className='mt-10 flex justify-center items-center gap-1.5 mb-5'>
                    <button 
                        onClick={() => {
                            document.getElementById('metricBtn').style.backgroundColor = 'white';
                            document.getElementById('imperialBtn').style.backgroundColor = '#afd8d7';
                            setColor('mainGreen')
                        }}
                        id='metricBtn'
                        className='text-2xl text-[#67a198] bg-[#afd8d7] hover:bg-white px-7 py-1 shadow-md'>Metric</button>
                    <button
                     onClick={() => {
                        document.getElementById('metricBtn').style.backgroundColor = '#afd8d7';
                        document.getElementById('imperialBtn').style.backgroundColor = 'white';
                        setColor('mainGreen')
                    }}
                    id='imperialBtn'
                    className='text-2xl text-[#67a198] bg-[#afd8d7] hover:bg-white px-7 py-1 shadow-md'>Imperial</button>
                </div>

                <div>
                    <form
                        action="submit"
                        onSubmit={calcBmi}>
                        <div className='flex justify-center gap-5 items-center mt-6 mb-6'>
                            <label className='text-2xl text-[#245954]' htmlFor="height" >Height(m)</label>
                            <input
                                className='w-25 bg-[#cde6e4] rounded-lg py-2 text-center'
                                type="tel"
                                name="height"
                                id="height"
                                placeholder='Enter Height'
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />

                            <label
                                className='text-2xl text-[#245954]'
                                htmlFor="weight"
                            >Weight(kg)</label>
                            <input
                                className='w-25 bg-[#cde6e4] rounded-lg py-2 text-center'
                                type="tel"
                                name="weight"
                                id="weight"
                                placeholder='Enter Weight'
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div className='mt-8 flex justify-center items-center gap-0.5' ref={dropValue}
                        >
                            <select
                                className='text-[#4b5151] appearance-none rounded-s-xl w-60 bg-white text-2xl py-2.5 text-center'
                                name="country"
                                id="Country"
                            >
                                <option value="Coun">Country</option>
                                <option value="In">India</option>
                                <option value="Us">USA</option>
                                <option value="Chi">China</option>
                                <option value="NZ">New Zealand</option>
                                <option value="AUS">Australia</option>
                                <option value="Can">Canada</option>
                            </select>
                            <div className='text-5xl bg-white rounded-e-xl  py-0.5 '>
                                <IoMdArrowDropdown onClick={handleClick} />
                            </div>
                            <select className='text-[#4b5151] appearance-none rounded-s-xl w-60 bg-white text-2xl py-2.5 text-center' name="age" id="Age">
                                <option value="">Age</option>
                                <option value="">16</option>
                                <option value="">17</option>
                                <option value="">18</option>
                                <option value="">19</option>
                                <option value="">20</option>2
                                <option value="">21</option>
                            </select>
                            <div className='text-5xl bg-white rounded-e-xl  py-0.5 '>
                                <IoMdArrowDropdown />
                            </div>
                            <select className='text-[#4b5151] appearance-none rounded-s-xl w-60 bg-white text-2xl py-2.5 text-center' name="age" id="Age">
                                <option value="">Urban</option>
                                <option value="">Rural</option>
                            </select>
                            <div className='text-5xl bg-white rounded-e-xl  py-0.5 '>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                        <div className='mt-11 flex gap-2.5 justify-center'>
                            <input className='h-auto  scale-150' type="checkbox" name="" id="" required />
                            <p className='text-xl text-white'> <span className='text-[#306d6d]'>I accept the </span> terms and conditions</p>
                        </div>
                        <div className='mt-5 flex justify-center text-center'>
                            <button
                                className='bg-white text-[#61b0aa]  py-2 w-60 rounded-lg text-2xl'
                                type='submit'
                                onClick={() => setOpenPopUp(!openPopUp)}
                            >Calculate</button>
                        </div>
                    </form>
                    {openPopUp && <PopUp onClose={() => setOpenPopUp(!openPopUp)} PopUpBmi={bmi.bmiValue} PopUpMessage={bmi.bmiMessage} />}
                </div>
            </div>
        </div>
    )
}

export default Form