import React from "react";
import {FcContacts, FcCopyright} from "react-icons/fc";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaPeriscope,
  FaTwitter,
} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import logo from "../../assets/logo/logo.jpeg";

const Footer = () => {
  return (
    <div style={{backgroundColor: "#ff77bc"}}>
      <div className="footer-header grid grid-cols-2 lg:grid-cols-5 gap-8 text-gray-50 mb-5 mt-10 pt-6">
        <div>
          <h2 className="font-bold text-5xl text-[#eae7eb]">Kid Castle</h2>
          <img className="w-12 rounded-full" src={logo} alt="" />
          <br />
          <div className="list-none ps-6 space-y-8 grid">
            <li>
              <FaFacebookF className="text-sky-500 text-5xl"></FaFacebookF>
            </li>
            <li>
              <FaFacebookMessenger className="text-violet-500 text-5xl"></FaFacebookMessenger>
            </li>
            <li>
              <FcGoogle className="text-5xl"></FcGoogle>
            </li>
            <li>
              <FaTwitter className="text-blue-400 text-5xl"></FaTwitter>
            </li>
          </div>
          <br />
          <div className="flex items-center gap-2 w-30 h-10">
            <img src="/public/assets/Icons/Group 9969.png" alt="" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Shop</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0] ">
            <p>For Baby</p>
            <br />
            <p>1 to 2 years</p>
            <br />
            <p>2 to 4 years</p>
            <br />
            <p>5 to 7 years</p>
            <br />
            <p>12 years & Up</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Brand</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0]">
            <p>Our Story</p>
            <br />
            <p>Blog</p>
            <br />
            <p>In the Press</p>
            <br />
            <p>Location</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Support</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0]">
            <p>Return Policy</p>
            <br />
            <p>Sales</p>
            <br />
            <p>Refund Policy</p>
            <br />
            <p>Contact</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold  text-3xl">Contact Us</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0] ">
            <p>
              <span className="inline-flex text-2xl">
                <FaPeriscope />
              </span>
              123, Lorem ipsum, dolor sit amet, consectetur adipiscing, City,
              State, Country - 123 456
            </p>
            <br />
            <p>
              <span className="inline-flex">
                <FcContacts />
              </span>
              +1 777 - 978 - 5570
            </p>
            <br />
          </div>
        </div>
      </div>
      <hr />
      <div className=" text-center mt-12 mb-32 mx-auto">
        <div className="">
          <p className="font-normal text-xl text-[#fffaf0] pb-8">
            <span className="inline-flex text-2xl">
              <FcCopyright />
            </span>
            Copyright Protected Berbie Doll
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
