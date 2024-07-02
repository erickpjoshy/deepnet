import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="container mx-auto relative">
        <div className="flex justify-between">
          <NavLink to="/" className="logo">
            <div className="absolute top-14 left-0 w-full sm:w-80">
              <div className="flex justify-center sm:justify-start">
                <div className="w-20 static z-20">
                  <img src="/logo.png" className="w-full h-full" />
                </div>
                <div className="flex-col hidden sm:flex">
                  <h1 className="text-3xl mt-2 font-medium">
                    <span className="text-primary">DEEP</span>
                    <span className="text-white ml-2">NET</span>
                  </h1>
                  <h1 className="text-sec text-3xl font-medium static z-20">
                    SOFT
                  </h1>
                </div>
              </div>
            </div>
          </NavLink>
          <div className="nav-items text-white mt-16 hidden lg:block">
            <ul className="flex gap-4 cursor-pointer">
              <li>HOME</li>
              <li>
                <NavLink to={'/'}>MENU</NavLink>
              </li>
              <li>
                <NavLink to={'/addcategory'}>ADD CATEGORY</NavLink>
              </li>
              <li>
                <NavLink to={'/addmenu'}>ADD MENU</NavLink>
              </li>
              <li>MAKE A RESERVATION</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="nav-icon block lg:hidden">
            {open ? (
              <i
                onClick={() => {
                  setOpen(!open);
                }}
                className="fa-solid fa-xmark text-2xl text-white mt-8 mr-3"
              ></i>
            ) : (
              <i
                onClick={() => {
                  setOpen(!open);
                }}
                className="fa-solid fa-bars text-2xl text-white mt-8 mr-3"
              ></i>
            )}
            {open && (
              <div className="nav-items-sub text-white mt-2  bg-primary2 absolute p-6 right-0 z-20">
                <ul className="flex gap-6 cursor-pointer flex-col">
                  <li>
                    <NavLink to={'/'} className="logo">
                      HOME
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/'}>MENU</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/addcategory'}>ADD CATEGORY</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/addmenu'}>ADD MENU</NavLink>
                  </li>
                  <li>MAKE A RESERVATION</li>
                  <li>CONTACT US</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
