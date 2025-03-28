import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-end h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col p-6 bg-white max-w-sm"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
          <p className="text-gray-600">
          Welcome to PopX! 🚀 Experience seamless connection, creation, and exploration—all in one place!
          </p>
        </div>

        <div className="w-full space-y-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/signup")}
            className="w-full bg-purple-600 text-white py-3 rounded-lg"
          >
            Create Account
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="w-full bg-purple-100 text-purple-600 py-3 rounded-lg"
          >
            Already Registered? Login
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
