// /components/Header.tsx
"use client";
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoLogoAndroid } from "react-icons/io";
import { MdOutlineGTranslate } from "react-icons/md";

const Header = () => {
  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg z-50 hidden md:block">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* ロゴ */}
        <motion.div
          className="text-white text-3xl font-bold flex items-center cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <MdOutlineGTranslate className="text-white text-4xl mr-2" />
          Aqua Translator
        </motion.div>

        {/* ナビゲーションリンク */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {["Home", "Features", "About", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-blue-200 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* アクションボタン */}
        <motion.a
          href="#"
          className="hidden md:inline-flex items-center bg-blue-800 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-blue-900 transition-colors duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaGithub className="mr-2" />
          Download
        </motion.a>
      </div>
    </header>
  );
};

export default Header;