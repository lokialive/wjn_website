import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl, homeimg } from "../Details";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { redbook,tiktok, bilibili } = socialMediaUrl;
  const {redbook_img,tiktok_img,bilibili_img} = homeimg;
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="logo_container flex justify-between items-center py-2 md:py-10">
        <NavLink className='logo' to="/">
          <div className="ui-photo1">
          <img className="w-14" src={logos.avatar} alt="logo" /> </div>
          <p className="logo_name">饿了么同学</p>
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className= {` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className=" nav dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="head_title pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              主页
            </NavLink>
          </li>
          <li className="head_title pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              关于我
            </NavLink>
          </li>
          {/* <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              足迹
            </NavLink>
          </li> */}
          <li className="head_title pb-1 md:pb-0">
            <NavLink to="/projects" onClick={toggleClass}>
              作品
            </NavLink>
          </li>
          <li  className="head_title pb-1 md:pb-0">
            <NavLink to="/contact" onClick={toggleClass}>
              联系我
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
          <li>
          <a className='' href={socialMediaUrl.redbook}>
              <div className="ui-photo2">
                <img className="w-14" src={redbook_img} alt="logo" /> 
              </div>
            </a>
          </li>
          <li>
            <a className='' href={socialMediaUrl.tiktok}>
              <div className="ui-photo2">
                <img className="w-14" src={tiktok_img} alt="logo" /> 
              </div>
            </a>
          </li>
          <li>
            <a className='' href={socialMediaUrl.bilibili}>
              <div className="ui-photo2">
                <img className="w-14" src={bilibili_img} alt="logo" /> 
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
