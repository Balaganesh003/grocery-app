import React from 'react';
import Logo from '../img/logo.png';
import { AiFillShopping } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import Avatar from '../img/avatar.png';

const Header = () => {
  return (
    <header className="fixed z-50 p-6 px-16 w-screen">
      {/* Desktop */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              About
            </li>
            <li className="text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-all ease-in-out">
              Contact
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <AiFillShopping className="text-textColor text-2xl cursor-pointer" />
            <div className=" absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-cartNumBg">
              <p className=" text-white text-xs font-semibold">2</p>
            </div>
          </div>
          <div>
            <img
              src={Avatar}
              alt="userprofile"
              className="w-10 h-10 shadow-xl rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden w-full h-full "></div>
    </header>
  );
};

export default Header;
