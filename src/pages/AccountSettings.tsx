import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";

const AccountSettings: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col p-6 bg-white max-w-sm"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Account Settings</h1>
        </div>

        <div className="flex mb-6 gap-7">
          <div className="relative mb-4">
            <img
              src={profileImage || "./default-user.png"}
              alt="Profile"
              className="w-22 h-22 rounded-full object-cover"
            />
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-2 cursor-pointer"
            >
              <FaCamera />
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <div className="text-left">
            <h2 className="font-bold">Marry Doe</h2>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <div className="p-4 rounded-lg">
          <p className="text-gray-600 border-b-1 border-dashed pb-5">
          Passionate about innovation and creativity, I thrive on exploring new ideas and building meaningful connections. With a keen eye for detail and a drive for excellence, I embrace challenges and continuously strive for growth.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountSettings;
