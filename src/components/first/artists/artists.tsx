// components/ArtistsForm.tsx
import React from "react";
import { useSearch } from "@/hooks/useSearch";
import { SearchAPI } from "@/lib/api/search-api";
import FirstTimeForm from "../first-time-form";
import { Artist } from "@/types/artist.type";
import { FormData } from "../multi-page-form";

export default function ArtistsForm({
  isValid,
  populateFormData,
}: {
  isValid: () => void;
  populateFormData: (data: FormData) => void;
}) {
  const searchAPI = new SearchAPI();

  const {
    searchTerm,
    displayedItems,
    selectedItems,
    error,
    isLoading,
    handleSearch,
    toggleItem,
    removeItem,
  } = useSearch<Artist>(searchAPI.searchArtistsByName, "");

  const handleNext = () => {
    if (selectedItems.length === 0) {
    } else {
      populateFormData({ artists: [...selectedItems] });
      isValid();
      console.log("Proceeding to next step with artists:", selectedItems);
    }
  };

  return (
    <FirstTimeForm
      searchTerm={searchTerm}
      handleSearch={handleSearch}
      displayedItems={displayedItems.map((artist) => artist.name)}
      toggleItems={toggleItem}
      selectedItems={selectedItems}
      removeItems={removeItem}
      error={error}
      handleNext={handleNext}
      isLoading={isLoading}
      keyWord="Gotta Know Your Favorite Artists"
    />
  );
}
