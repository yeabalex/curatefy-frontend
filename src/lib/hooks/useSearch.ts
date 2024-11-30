import { useState, useCallback } from "react";
import { debounce } from "lodash";

export function useSearch<T>(
  searchApi: (term: string) => Promise<T[]>,
  initialSearchTerm: string = ""
) {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const debouncedSearch = useCallback(
    debounce(async (term: string) => {
      if (!term) {
        setDisplayedItems([]);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const items = await searchApi(term);
        setDisplayedItems(items.slice(0, 7));
      } catch (err) {
        setError(`Error searching items: ${(err as Error).message}`);
        setDisplayedItems([]);
      } finally {
        setIsLoading(false);
      }
    }, 1000),
    [searchApi]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  const toggleItem = (itemName: string) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    } else if (selectedItems.length < 5) {
      setSelectedItems([...selectedItems, itemName]);
    }
    setError("");
  };

  const removeItem = (itemName: string) => {
    setSelectedItems(selectedItems.filter((item) => item !== itemName));
  };

  return {
    searchTerm,
    setSearchTerm,
    displayedItems,
    selectedItems,
    error,
    isLoading,
    handleSearch,
    toggleItem,
    removeItem,
  };
}
