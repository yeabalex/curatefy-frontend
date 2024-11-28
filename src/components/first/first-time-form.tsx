"use client";

import { FaArrowRight, FaTimes, FaSpinner } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FormData } from "./multi-page-form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface FirstTimeFormProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  displayedItems: string[];
  toggleItems: (genre: string) => void;
  selectedItems: string[];
  removeItems: (genre: string) => void;
  error: string;
  handleNext: () => void;
  isLoading?: boolean;
  submit?: (data: FormData) => void;
  keyWord: string;
}

export default function FirstTimeForm({
  searchTerm,
  handleSearch,
  displayedItems,
  toggleItems,
  selectedItems,
  removeItems,
  error,
  handleNext,
  isLoading,
  submit,
  keyWord,
}: FirstTimeFormProps) {
  const selector = useSelector(
    (state: RootState) => state.preferenceReducer.preferences
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submit && selectedItems.length > 0) {
      submit(selector);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-secondary rounded-2xl w-[100%] md:w-[75%] relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center rounded-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
              >
                <FaSpinner className="text-white text-4xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <h1 className="mb-4 font-bold text-3xl">{keyWord}</h1>
        <motion.input
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          disabled={isLoading}
          className={`mb-4 p-2 w-full border border-gray-300 rounded-md text-dark ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence>
            {displayedItems.map((genre) => (
              <motion.button
                key={genre}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => toggleItems(genre)}
                disabled={isLoading}
                className={`px-4 py-2 border rounded-full text-sm cursor-pointer ${
                  selectedItems.includes(genre)
                    ? "bg-green-500 text-white"
                    : "bg-white text-dark"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {genre}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h4 className="font-bold mb-2">Selected:</h4>
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {selectedItems.map((genre) => (
                <motion.button
                  key={genre}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => removeItems(genre)}
                  disabled={isLoading}
                  className={`px-4 py-2 border rounded-full text-sm bg-green-500 text-white flex items-center ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {genre} <FaTimes className="ml-2 text-red-500" />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          type="submit"
          disabled={isLoading || selectedItems.length === 0}
          className={`absolute bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full flex items-center justify-center ${
            isLoading || selectedItems.length === 0
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          aria-label="Next"
        >
          <FaArrowRight />
        </motion.button>
      </motion.div>
    </form>
  );
}
