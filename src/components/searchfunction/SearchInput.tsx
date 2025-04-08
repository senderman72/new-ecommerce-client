import { IoMdSearch } from "react-icons/io";
import {
  StyledSearchForm,
  StyledSearchInput,
} from "../styled/styledsearch/StyledSearchinput";
import { ChangeEvent, FormEvent, use, useState } from "react";
import { getGoogleSearch } from "../../services/googleApi/getGoogleSearch";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    if (!searchQuery) return;

    try {
      const response = await getGoogleSearch(searchQuery);
      console.log(response);
    } catch {
      console.log("something went wrong");
    }
  };

  return (
    <StyledSearchForm>
      <StyledSearchInput
        type="text"
        placeholder="sök"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
      />
      <IoMdSearch size={50} onClick={handleSearch} />
    </StyledSearchForm>
  );
};

export default SearchInput;
