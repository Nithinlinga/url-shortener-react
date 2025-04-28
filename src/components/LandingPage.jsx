/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';
import { motion } from "framer-motion"
import { useStoreContext } from '../contextapi/ContextApi';

const LandingPage = () => {
    const {token,setToken}=useStoreContext();
    const desc = "Generate short, memorable links with ease using LinkNShare";
    const dashBoardNavigateHandler = () => {

    };

    return (
        <div className="min-h-[calc(100vh-64px)] bg-[#0a0a0a] text-gray-300 px-4 sm:px-8 lg:px-14">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between pt-16 lg:pt-20 gap-10">
                {/* Left Side Text */}
                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: -80 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight md:leading-[55px] mb-4">
                        {desc}
                    </motion.h1>
                    <p className="text-gray-400 text-sm mb-6 max-w-xl">
                        LinkNShare simplifies URL shortening for efficient sharing.
                        Easily generate, manage, and track your shortened links.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            onClick={dashBoardNavigateHandler}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-md hover:opacity-90 transition duration-300">
                            Manage Links
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            onClick={dashBoardNavigateHandler}
                            className="border border-gray-500 text-gray-300 py-2 px-6 rounded-md hover:border-white hover:text-white transition duration-300">
                            Create Short Link
                        </motion.button>
                    </div>

                </div>

                {/* Right Side Image */}
                <div className="flex-1 flex justify-center">
                    <motion.img
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        src="/image/img2.png"
                        alt="linkImage"
                        className="w-full max-w-sm sm:max-w-md object-cover rounded-md border border-gray-700 shadow-md"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="pt-16">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-2xl sm:text-3xl font-bold text-center mb-10 max-w-3xl mx-auto">
                    Trusted by individuals and teams at the world's best companies
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <Card
                        title="Simple URL Shortening"
                        desc="Create short, memorable URLs in just a few clicks. No hassle, just results."
                    />
                    <Card
                        title="Powerful Analytics"
                        desc="Track performance with clicks, geolocation data, and referral insights."
                    />
                    <Card
                        title="Enhanced Security"
                        desc="Shortened URLs are encrypted and protected with advanced measures."
                    />
                    <Card
                        title="Fast and Reliable"
                        desc="Enjoy lightning-fast redirects with high uptime and global availability."
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
