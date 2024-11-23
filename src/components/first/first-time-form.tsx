"use client";

import { FaArrowRight, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface FirstTimeFormProps {
  searchTerm: string;
  handleGenreSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  displayedGenres: string[];
  toggleGenre: (genre: string) => void;
  selectedGenres: string[];
  removeGenre: (genre: string) => void;
  error: string;
  handleNext: () => void;
}

export default function FirstTimeForm({
  searchTerm,
  handleGenreSearch,
  displayedGenres,
  toggleGenre,
  selectedGenres,
  removeGenre,
  error,
  handleNext,
}: FirstTimeFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-4 bg-secondary rounded-2xl w-[100%] md:w-[75%] relative"
    >
      <h1 className="mb-4 font-bold text-3xl">
        Gotta Know Your Favorite Genres
      </h1>
      <motion.input
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        type="text"
        placeholder="Search for genres"
        value={searchTerm}
        onChange={handleGenreSearch}
        className="mb-4 p-2 w-full border border-gray-300 rounded-md text-dark"
      />
      <motion.div
        className="flex flex-wrap gap-2 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AnimatePresence>
          {displayedGenres.map((genre) => (
            <motion.button
              key={genre}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleGenre(genre)}
              className={`px-4 py-2 border rounded-full text-sm cursor-pointer ${
                selectedGenres.includes(genre)
                  ? "bg-green-500 text-white"
                  : "bg-white text-dark"
              }`}
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
        <h4 className="font-bold mb-2">Selected Genres:</h4>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {selectedGenres.map((genre) => (
              <motion.button
                key={genre}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => removeGenre(genre)}
                className="px-4 py-2 border rounded-full text-sm bg-green-500 text-white flex items-center"
              >
                {genre} <FaTimes className="ml-2 text-red-500" />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 mt-4"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="absolute bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full flex items-center justify-center"
        aria-label="Next"
      >
        <FaArrowRight />
      </motion.button>
    </motion.div>
  );
}
