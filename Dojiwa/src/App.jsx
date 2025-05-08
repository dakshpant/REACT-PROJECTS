import './index.css'
import Home from './components/Home Module/Home'
import Layout from './layout';
import About from './components/AboutUs Module/About'
import Contact from './components/ContactUS Module/ContactUs'
import Blog from './components/Blog Module/Blog'
import Projects from './components/Project Lib Module/Project'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { FaBlog } from 'react-icons/fa';

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog/>} />
        <Route path='projectLibrary' element={<Projects/>} />
        <Route path='contactUs' element={<Contact />} />
      </Route>
    )
  )
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
