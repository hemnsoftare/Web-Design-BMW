import React from "react";

const Footer = () => {
  return (
    <footer className=" flex bg-cyan-700 py-4 border-t-[20px] border-orange-500  items-center px-[100px] justify-between">
      <div className="text-teal-200 flex flex-col gap-2">
        <h2 className="text-[20px] font-bold text-white">sitemap</h2>
        <ul>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            Home
          </li>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            About us
          </li>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            contact us
          </li>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            Login
          </li>
        </ul>
      </div>
      <div className="text-teal-200 flex flex-col gap-2">
        <h2 className="text-[20px] font-bold text-white">
          Terms and quick links
        </h2>
        <ul>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            term of useage
          </li>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            link 1
          </li>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            link 2
          </li>
          <li className="hover:text-white duration-300 transition-all cursor-pointer">
            link 3
          </li>
        </ul>
      </div>
      <div className="flex text-teal-200 flex-col gap-2">
        <h2 className="text-[20px] font-bold text-white">adress and content</h2>
        <p className="w-[200px] hover:text-white duration-300 transition-all text-[14px]  italic">
          City, Governorate, Country Phone: 0964 000 000 0000 Email:
          example@domain.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
