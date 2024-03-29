import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytlogo from "../Assest/yt-logo.png";
import ytLogoMobile from "../Assest/yt-logo-mobile.png";

import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

import { Context } from "../Context/contextApi";
import Loader from "../common/Loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (
      (e?.key == "Enter" || e === "searchButton") &&
      (searchQuery?.length > 0)
    ) {
      navigate(`searchResults/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname.split("/").filter(Boolean)[0];

  return (
    <div className="flex flex-row z-10 top-0 sticky items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex cursor-pointer items-center justify-center h-10 w-10 rounded-full md:hidden md:mr-6 hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img className="h-full dark:md:block" src={ytlogo} alt="Youtube" />
          <img className="h-full hidden " src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      
      {/* search section */}
      <div className="flex items-center group">
        <div className="flex h-8 border border-[#303030] rounded-l-3xl md:h-10 md:ml-10 md:pl-5 group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-xl text-white" />
          </div>
          <input
            type="text"
            className="pr-5 pl-5 w-44 bg-transparent outline-none text-white md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
            placeholder="Search"
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
          <IoIosSearch className="text-white " />
        </button>
      </div>

      <div className="flex items-center md:hidden lg:flex">
        
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="text-white text-xl cursor-pointer"/>
          </div>
          <div className="flex items-center justify-center h-10 w-10 ml-2 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="text-white text-xl cursor-pointer"/>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://xsgames.co/randomusers/assets/avatars/female/61.jpg" alt="" />
          </div>
      
      </div>
    </div>
  );
};

export default Header;
