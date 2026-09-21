import React from "react";
import { Link } from "react-router"; // Link use karenge bina page reload kiye navigate karne ke liye
import { Mail, MapPin, Phone } from "lucide-react";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-auto font-inter">
      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN FOOTER CONTENT (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: Brand & About */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="w-[140px] cursor-pointer">
              <img
                src="./public/logoipsum-426.png"
                alt="SiteLogo"
                className="w-full h-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mt-2">
              Providing the best products and services with a touch of elegance.
              Your one-stop destination for quality and trust.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 mb-5 text-lg">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-indigo-600 hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div>
            <h3 className="font-poppins font-semibold text-gray-900 mb-5 text-lg">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>123 Business Avenue, Tech District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>hello@yourwebsite.com</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2.5 bg-gray-50 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-50 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-gray-50 rounded-full text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-1"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MyBrand. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-indigo-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-indigo-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
