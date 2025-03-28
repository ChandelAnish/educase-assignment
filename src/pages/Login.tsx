import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add login logic here
    navigate("/accountSettings");
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center p-6 bg-white max-w-sm"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            Signin to your PopX account
          </h1>
          <p className="text-gray-600">
          Welcome Back to PopX! 🎉 Log in to continue exploring, connecting, and creating with ease.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-purple-600 text-sm">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>

          <div>
            <label className="text-purple-600 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-3 border rounded-lg mt-1"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleLogin}
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg transition-colors duration-300 ${
              isFormValid
                ? "bg-purple-600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Login
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
