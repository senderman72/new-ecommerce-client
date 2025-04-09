import { IoMdSearch } from "react-icons/io";
import {
  StyledSearchForm,
  StyledSearchInput,
} from "../styled/styledsearch/StyledSearchinput";
import { ChangeEvent, FormEvent, useState } from "react";
import { getGoogleSearch } from "../../services/googleApi/getGoogleSearch";
import DropDownSearch from "./DropDownSearch";

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

      console.log(response);
      setResults(items);
    } catch {
      console.log("something went wrong");
    }
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
        <IoMdSearch size={40} onClick={handleSearch} />
      </StyledSearchForm>
      <DropDownSearch results={results} />
    </div>
  );
};

export default SearchInput;
