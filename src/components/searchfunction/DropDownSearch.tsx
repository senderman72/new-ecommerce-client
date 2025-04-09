import React from "react";

import {
  StyledDropdownContainer,
  StyledResultItem,
} from "../styled/styledsearch/StyledDropdownContainer";

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  displayLink: string;
}

interface DropDownSearchProps {
  results: SearchResult[];
}

const DropDownSearch: React.FC<DropDownSearchProps> = ({ results }) => {
  if (results.length === 0) return null;

  return (
    <StyledDropdownContainer>
      {results.map((result, index) => (
        <StyledResultItem key={index}>
          <a href={result.link} target="_blank" rel="noopener noreferrer">
            <strong>{result.title}</strong>
            <br />
            <small>{result.snippet}</small>
          </a>
        </StyledResultItem>
      ))}
    </StyledDropdownContainer>
  );
};

export default DropDownSearch;
