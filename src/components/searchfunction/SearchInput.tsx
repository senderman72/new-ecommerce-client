import { IoMdSearch } from "react-icons/io";
import {
  StyledSearchForm,
  StyledSearchInput,
} from "../styled/styledsearch/StyledSearchinput";
import { ChangeEvent, FormEvent, useState } from "react";
import { getGoogleSearch } from "../../services/googleApi/getGoogleSearch";
import DropDownSearch from "./DropDownSearch";
import useProducts from "../../hooks/useProducts";

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  displayLink: string;
  image?: string;
}

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const { products } = useProducts();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    if (!searchQuery) return;

    try {
      const response = await getGoogleSearch(searchQuery);

      const items =
        response.items?.map((item) => ({
          title: item.title,
          link: item.link,
          snippet: item.snippet,
          displayLink: item.displayLink,
          image: item.pagemap?.cse_image?.[0]?.src,
        })) ?? [];

      setResults(items);
      setShowDropdown(showDropdown);
    } catch {
      console.log("something went wrong");
    }
  };

  const closeDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div style={{ position: "relative" }}>
      <StyledSearchForm onSubmit={handleSearch}>
        <StyledSearchInput
          type="text"
          placeholder="sök"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.target.value);
          }}
        />
        <IoMdSearch size={40} />
      </StyledSearchForm>
      {results.length > 0 && products.length > 0 && (
        <DropDownSearch
          results={results}
          products={products}
          query={searchQuery}
          closeDropdown={closeDropdown}
        />
      )}
    </div>
  );
};

export default SearchInput;
