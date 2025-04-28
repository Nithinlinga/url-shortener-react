import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-8 bg-gradient-to-br from-[#f0f2f5] via-[#ffffff] to-[#f0f2f5] text-gray-800">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="sm:text-4xl text-3xl font-bold italic mb-4 tracking-tight text-gray-900">
          About LinkNShare
        </h1>
        <p className="text-gray-600 text-sm mb-10 leading-relaxed">
          LinkNShare simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Whether you're a marketer, developer, or casual user, LinkNShare provides a seamless experience to improve how you share and measure your content.
        </p>

        <div className="space-y-8">
          {/* Feature: Simple URL Shortening */}
          <div className="flex items-start space-x-4">
            <FaLink className="text-indigo-600 text-2xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Simple URL Shortening</h2>
              <p className="text-gray-600">
                Create short, clean URLs in seconds. Our user-friendly interface ensures you're just a few clicks away from sharing smarter.
              </p>
            </div>
          </div>

          {/* Feature: Powerful Analytics */}
          <div className="flex items-start space-x-4">
            <FaShareAlt className="text-green-500 text-2xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Powerful Analytics</h2>
              <p className="text-gray-600">
                Dive deep into link performance — track clicks, countries, referrers and more to make informed decisions.
              </p>
            </div>
          </div>

          {/* Feature: Enhanced Security */}
          <div className="flex items-start space-x-4">
            <FaEdit className="text-purple-500 text-2xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Enhanced Security</h2>
              <p className="text-gray-600">
                Your data is safe with us. All URLs are encrypted and monitored to maintain privacy and prevent misuse.
              </p>
            </div>
          </div>

          {/* Feature: Fast and Reliable */}
          <div className="flex items-start space-x-4">
            <FaChartLine className="text-red-500 text-2xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Fast and Reliable</h2>
              <p className="text-gray-600">
                Experience blazing-fast redirects and 99.9% uptime. Your links will always be up and performing at their best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
