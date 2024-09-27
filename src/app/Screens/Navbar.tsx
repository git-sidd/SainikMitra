"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io";
import logo from "../../../public/logo.png"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className='flex fix justify-start md:items-center md:justify-center sticky top-0 z-[20]  mb-5 mx-0 h-[45px] bg-black '>
        
      <nav>
        
        <ul className={`flex items-center justify-around  gap-4 md:gap-8 ${navbarOpen ? 'flex-col mb-4 h-[200px] opacity-80 bg-blend-overlay bg-black/70 w-full absolute top-[45px]' : 'hidden md:flex'}`}>
          <li className='text-white md:text-white hover:text-white rounded-sm hover:border-b-2 hover:scale-110 md:font-bold font-extrabold'>
            <Link href="#">Home</Link>
          </li>
          <li className='text-white md:text-white hover:text-white rounded-sm hover:border-b-2 hover:scale-110 md:font-bold font-extrabold'>
            <Link href="#">About Us</Link>
          </li>
          <li className='text-white md:text-white hover:text-white rounded-sm hover:border-b-2 hover:scale-110 md:font-bold font-extrabold'>
            <Link href="#">Contribute </Link>
          </li>
          <li className='text-white md:text-white hover:text-white rounded-sm hover:border-b-2 hover:scale-110 md:font-bold font-extrabold'>
            <Link href="#">Gallery
            </Link>
          </li>
          <li className='text-white md:text-white hover:text-white rounded-sm hover:border-b-2 hover:scale-110 mb-4 md:mb-0  md:font-bold font-extrabold'>
            <Link href="#register">Contact Us
            </Link>
          </li>
        </ul>
        <Image src={logo} height={100} width={110} alt='logo' className=' bg-black absolute right-10 top-2 md:left-10 z-20'></Image>
        <div className='md:hidden'>
          <button
            className='p-2 text-gray-600 rounded-md outline-none focus:border-gray-400'
            onClick={toggleNavbar}
          >
            {navbarOpen ? <IoMdClose/> :<GiHamburgerMenu/> }
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;