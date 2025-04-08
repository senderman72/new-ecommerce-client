import { IoMdSearch } from "react-icons/io";
import {
  StyledSearchForm,
  StyledSearchInput,
} from "../styled/styledsearch/StyledSearchinput";

const SearchInput = () => {
  return (
    <StyledSearchForm>
      <StyledSearchInput type="text" />
      <IoMdSearch size={50} />
    </StyledSearchForm>
  );
};

export default SearchInput;
