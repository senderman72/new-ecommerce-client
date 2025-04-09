import React from "react";

import {
  ResultImage,
  ResultText,
  StyledDropdownContainer,
  StyledResultItem,
} from "../styled/styledsearch/StyledDropdownContainer";

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  displayLink: string;
  image: string;
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
            {result.image && (
              <ResultImage src={result.image} alt={result.title} />
            )}
            <ResultText>
              <strong>{result.title}</strong>
              <small>{result.snippet}</small>
            </ResultText>
          </a>
        </StyledResultItem>
      ))}
    </StyledDropdownContainer>
  );
};

export default DropDownSearch;
