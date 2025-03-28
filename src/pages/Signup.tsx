import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCreateAccount = () => {
    // Add account creation logic here
    navigate("/login");
  };

  return (
    <div className="flex justify-center h-screen items-start">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between p-6 bg-white max-w-sm"
      >
        <form onSubmit={handleCreateAccount}>
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-2">
                Create your PopX account
              </h1>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <label className="text-purple-600 text-sm bg-white absolute left-3 bottom-11 font-semibold">
                  Full Name*
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Anish"
                  className="w-full p-3 border rounded-lg mt-1"
                  required
                />
              </div>

              <div className="relative">
                <label className="text-purple-600 text-sm bg-white absolute left-3 bottom-11 font-semibold">
                  Phone number*
                </label>
                <input
                type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  className="w-full p-3 border rounded-lg mt-1"
                  required
                />
              </div>

              <div className="relative">
                <label className="text-purple-600 text-sm bg-white absolute left-3 bottom-11 font-semibold">
                  Email address*
                </label>
                <input
                type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="anish@gmail.com"
                  className="w-full p-3 border rounded-lg mt-1"
                  required
                />
              </div>

              <div className="relative">
                <label className="text-purple-600 text-sm bg-white absolute left-3 bottom-11 font-semibold">
                  Password*
                </label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Anish123@"
                  className="w-full p-3 border rounded-lg mt-1"
                  required
                />
              </div>

              <div className="relative">
                <label className="text-purple-600 text-sm bg-white absolute left-3 bottom-11 font-semibold">
                  Company name
                </label>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Educase India"
                  className="w-full p-3 border rounded-lg mt-1"
                />
              </div>

              <div>
                <label className="text-purple-600 text-sm font-semibold">
                  Are you an Agency?*
                </label>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isAgency"
                      checked={formData.isAgency === true}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, isAgency: true }))
                      }
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isAgency"
                      checked={formData.isAgency === false}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, isAgency: false }))
                      }
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4"
          >
            Create Account
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
