// /components/hero.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white py-20 h-screen overflow-hidden">
      
      {/* 背景エフェクト */}
      <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* パーティクル風のアニメーションを簡単に表現 */}
        <div className="absolute w-64 h-64 bg-blue-300 opacity-30 rounded-full animate-pulse top-1/4 left-1/3"></div>
        <div className="absolute w-40 h-40 bg-blue-500 opacity-30 rounded-full animate-pulse top-1/2 left-1/4"></div>
        <div className="absolute w-48 h-48 bg-blue-400 opacity-20 rounded-full animate-pulse top-3/4 left-2/3"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 relative z-10">
        
        {/* 左側: テキストセクション */}
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left" 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} // アニメーションの持続時間
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Aqua Translator
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Seamlessly translate in real-time with Aqua Translator. Whether you’re traveling or studying, enjoy fast and accurate translations at your fingertips.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center md:items-start">
            <motion.a
              href="#about"
              className="flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.6 }} // ボタンのアニメーションの持続時間
            >
              <span>About this App</span>
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-600 transition"
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.6 }}
            >
              <FaGithub className="mr-2" />
              <span>Get it on GitHub</span>
            </motion.a>
          </div>
        </motion.div>
        
        {/* 右側: 画像セクション */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-10 md:mt-20 w-80" // 画像の幅をスマホ用に調整
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/app-mockup.png"  // アプリのモックアップ画像を指定
            alt="Aqua Translator App Mockup"
            width={400} // 幅を調整
            height={700} // 高さを調整
            className="rounded-3xl transform" // 画像の拡大効果を追加
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;