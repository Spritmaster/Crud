import React, { useEffect, useState } from 'react'
import {  BsMoonFill, BsSunFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {ImUsers} from 'react-icons/im'

const themes = {
  light: 'light',
  dark: 'dark'
}

const getThemeFromLocalStorage  = () => {
  return localStorage.getItem('theme' || themes.light)
}


const Header = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())
  const handleTheme = () => {
    const {dark, light} = themes
    const newTheme = theme === light ? dark : light
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', theme)
  }
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className='header-bg'>

      <div className='max-w-[1400px] mx-auto py-3 px-1 flex justify-between'>

     
      <NavLink to={'/'} className='text-5xl font-bold bg-gradient-to-r from-[#fff] via-[#0004fe] to-[#dc8400] inline-block text-transparent bg-clip-text cursor-pointer' >CRUD</NavLink>

      <div className='flex items-center gap-5'>
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme}/>
            <BsSunFill className="swap-on h-8 w-8 text-[#ffd446]" />
            <BsMoonFill className="swap-off h-8 w-8 text-[#fff7f7] " />
          </label>

          <NavLink to={'createUser'} className="hidden sm:flex btn btn-active btn-neutral text-4xl">Create User</NavLink>
          <NavLink to={'createUser'} className=" sm:hidden text-[#fff] items-center flex btn btn-active btn-neutral text-4xl">
            <ImUsers className='text-[#fff]'/> +
          </NavLink>
        </div>

    </div>
    </div>
  )
}


export default Header