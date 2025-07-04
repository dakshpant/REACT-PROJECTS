import React, { useEffect, useState } from 'react'
import './style.css'
const LightDarkMode = () => {

  const [theme, setTheme] = useState(()=>{
    const initialTheme = localStorage.getItem("theme")
    return initialTheme ? initialTheme : "Light"
  })

  function getLocaTheme() {
    const localTheme = localStorage.getItem('theme')
    if(localTheme){
      setTheme(localTheme)
    }
  }

  function toggleTheme(){
    setTheme((prev)=>{
      const newTheme = prev === 'Light' ? 'Dark' : 'Light' ;
      localStorage.setItem('theme', newTheme)
      return newTheme
    })
  }

  useEffect(()=>{
    getLocaTheme()
  },[theme])
  return (
    <div className={`${theme} text-center py-5 light-dark-mode`} data-theme={theme}>
      <div className='container'>
        <p
        className={` text-3xl mb-2`}
        >The Theme Is : {theme}</p>
        <button 
        className={`px-3 py-2 border w-3xs rounded-3xl {theme === 'dark' ? btn-dark ? theme === 'light' ? btn-light :null}`}
        onClick={toggleTheme}>Changed Theme to {theme} </button>
      </div>
    </div>
  )
}

export default LightDarkMode