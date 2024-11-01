// /components/about.tsx
import React from 'react';
import { FaLanguage, FaWifi, FaMobileAlt, FaBolt } from 'react-icons/fa'; // アイコンをインポート

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-200 py-20" id="about">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">About Aqua Translator</h2>
        <p className="text-base md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Aqua Translator supports foreign language learning with a user-friendly UI and advanced features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Feature 1 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-white bg-opacity-80 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaLanguage className="text-4xl md:text-5xl text-blue-500 mb-4 animate-bounce" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">Multiple Languages</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Supports translations in over 40 languages to help you connect with people worldwide.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-white bg-opacity-80 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaWifi className="text-4xl md:text-5xl text-blue-500 mb-4 animate-bounce" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">Evex Developers API</h3>
            <p className="text-gray-600 text-sm md:text-base">
              We use Evex Developers' translation API to provide accurate translations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-white bg-opacity-80 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaMobileAlt className="text-4xl md:text-5xl text-blue-500 mb-4 animate-bounce" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">User-Friendly</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Simple and intuitive interface that anyone can use, no learning curve required.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center p-6 md:p-8 bg-white bg-opacity-80 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <FaBolt className="text-4xl md:text-5xl text-blue-500 mb-4 animate-bounce" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">Fast & Accurate</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Enjoy fast, accurate translations powered by cutting-edge technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
