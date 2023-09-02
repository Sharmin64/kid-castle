import React from "react";
import {FcContacts, FcCopyright} from "react-icons/fc";
import {FaFacebookF, FaFacebookMessenger, FaTwitter} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import logo from "../../assets/logo/logo.jpeg";

const Footer = () => {
  return (
    <div style={{backgroundColor: "#ff77bc"}}>
      <div className="footer-header grid grid-cols-2 lg:grid-cols-5 gap-8 text-gray-50 mb-5 mt-10">
        <div>
          <h2 className="font-bold text-5xl text-[#eae7eb]">Food Valley</h2>
          <img className="w-12 rounded-full" src={logo} alt="" />
          <br />
          <div className="list-none ps-5 space-y-10 grid">
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
          <h4 className="font-semibold text-3xl">Company</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0] ">
            <p>About Us</p>
            <br />
            <p>Work</p>
            <br />
            <p>Latest News</p>
            <br />
            <p>Careers</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Product</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0]">
            <p>Prototype</p>
            <br />
            <p>Plans & Pricing</p>
            <br />
            <p>Customers</p>
            <br />
            <p>Integrations</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-3xl">Support</h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0]">
            <p>Help Desk</p>
            <br />
            <p>Sales</p>
            <br />
            <p>Become a Partner</p>
            <br />
            <p>Developers</p>
            <br />
          </div>
        </div>
        <div>
          <h4 className="font-semibold font-[Dancing Script] text-3xl">
            {/*<h4 className="font-semibold font-[DM Serif Display] text-3xl">*/}
            Contact Us
          </h4>
          <br />
          <br />
          <div className="font-normal text-xl text-[#fffaf0] ">
            <p>524 Broadway , NYC</p>
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
      <div className=" text-center mt-12 mb-32 mx-auto">
        <div className="">
          <p className="font-normal text-xl text-[#fffaf0] pb-8">
            <span className="inline-flex text-2xl">
              <FcCopyright />
            </span>
            Copyright Protected Chef Recipe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /*<footer className="footer footer-center p-10 bg-pink-300 text-primary-content ">
        <div>
          <h2 className="text-4xl font-bold">Kid Castle</h2>
          <img className="w-12 rounded-full" src={logo} alt="" />
          <p className="font-bold">
            ACME Industries Ltd. <br />
            Providing reliable tech since 1992
          </p>
          <p>
            Copyright <FcCopyright className="inline-flex text-2xl" /> 2023 -
            All right reserved
          </p>
        </div>
        <div>
          <span>
            Contacts Info
            <FcContacts style={{fontSize: "2rem"}} className="inline-flex" />
          </span>
          <p>
            <FcCallback style={{fontSize: "2rem"}} className="inline-flex" />
            +008845 3455 2234 556
          </p>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>*/
}
