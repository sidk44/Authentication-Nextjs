"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { auth } from "../lib/auth"; // Firebase auth configuration.
import { motion } from "framer-motion"; // Animation library for UI transitions.

const UserProfile: React.FC = () => {
    const router = useRouter();
    const { user } = useAuth();

    const handleLogout = async () => {
    try {
        await auth.signOut(); //Sign out the user using Firebase auth.
        router.push("/");    // Redirect to the home page after logout.
    } catch (err) {
        console.error("Logout error:", err);
    }
    };

// If the user is not logged in, render a "Not Logged In" screen.
    if (!user) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-gradient-to-br from-purple-600 to-indigo-800 p-12 text-white flex flex-col justify-center items-center overflow-hidden relative"
        >
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">Oops!</h1>
            <p className="text-xl md:text-2xl mb-8 text-center relative z-10">
            You're not logged in.
            </p>
            <div className="w-64 h-64 bg-white bg-opacity-10 rounded-full absolute -bottom-32 -left-32 blur-xl"></div>
            <div className="w-64 h-64 bg-white bg-opacity-10 rounded-full absolute -top-32 -right-32 blur-xl"></div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-white dark:bg-gray-900 p-12 flex flex-col justify-center"
        >
            <div className="max-w-md w-full mx-auto space-y-8">
            <div>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                Not Logged In
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Please sign in to view your profile.
                </p>
            </div>
            <div>
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/")}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                >
                Go to Login
                </motion.button>
            </div>
            </div>
        </motion.div>
        </div>
    );
    }
 // If the user is logged in, render the profile page.
    return (
    <div className="min-h-screen flex flex-col md:flex-row">
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-gradient-to-br from-purple-600 to-indigo-800 p-12 text-white flex flex-col justify-center items-center overflow-hidden relative"
        >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">Welcome</h1>
        <p className="text-xl md:text-2xl mb-8 text-center relative z-10">
            {user.displayName || "User"}
        </p>
        <div className="w-64 h-64 bg-white bg-opacity-10 rounded-full absolute -bottom-32 -left-32 blur-xl"></div>
        <div className="w-64 h-64 bg-white bg-opacity-10 rounded-full absolute -top-32 -right-32 blur-xl"></div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 bg-white dark:bg-gray-900 p-12 flex flex-col justify-center"
        >
        <div className="max-w-md w-full mx-auto space-y-8">
            <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                Your Profile
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Here's what we know about you
            </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">Name:</span> {user.displayName || "Not provided"}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <span className="font-semibold">Email:</span> {user.email}
            </p>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogout}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 rounded-md font-semibold shadow-md transition-all duration-300 ease-in-out"
            >
                Logout
            </motion.button>
            </div>
        </div>
        </motion.div>
    </div>
    );
};

export default UserProfile;
