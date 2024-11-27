import { genres } from "@/constants/genres";
import { useEffect, useState } from "react";
import FirstTimeForm from "../first-time-form";
import { FormData } from "../multi-page-form";

export default function GenresForm({
  isValid,
  populateFormData,
}: {
  isValid: () => void;
  populateFormData: (data: FormData) => void;
}) {
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
      populateFormData({ genres: [...selectedGenres] });
      isValid();
      console.log("Proceeding to next step with genres:", selectedGenres);
    }
  };

  useEffect(() => {
    const randomGenres = genres.sort(() => 0.5 - Math.random()).slice(0, 7);
    setDisplayedGenres(randomGenres);
  }, []);

  return (
    <FirstTimeForm
      searchTerm={searchTerm}
      handleSearch={handleGenreSearch}
      displayedItems={displayedGenres}
      toggleItems={toggleGenre}
      selectedItems={selectedGenres}
      removeItems={removeGenre}
      error={error}
      handleNext={handleNext}
      keyWord="Gotta Know Your Favorite Genres"
    />
  );
}
