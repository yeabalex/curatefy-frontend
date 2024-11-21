"use client";

import { genres } from "@/constants/genres";
import { useEffect, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FirstTimeForm() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [displayedGenres, setDisplayedGenres] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleGenreSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      const filteredGenres = genres.filter((genre) =>
        genre.toLowerCase().includes(term)
      );
      setDisplayedGenres(filteredGenres.slice(0, 7));
    } else {
      const randomGenres = genres.sort(() => 0.5 - Math.random()).slice(0, 7);
      setDisplayedGenres(randomGenres);
    }
  };

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else if (selectedGenres.length < 5) {
      setSelectedGenres([...selectedGenres, genre]);
    }
    setError("");
  };

  const removeGenre = (genre: string) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  const handleNext = () => {
    if (selectedGenres.length === 0) {
      setError("Please select at least one genre before proceeding.");
    } else {
      console.log("Proceeding to next step with genres:", selectedGenres);
    }
  };

  useEffect(() => {
    const randomGenres = genres.sort(() => 0.5 - Math.random()).slice(0, 7);
    setDisplayedGenres(randomGenres);
  }, []);

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
