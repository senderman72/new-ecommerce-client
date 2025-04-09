import styled from "styled-components";

export const StyledDropdownContainer = styled.ul`
  position: absolute;
  top: 11dvh;
  right: -72px;

  width: 50vw;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0.5rem;
  z-index: 999;
  max-height: 300px;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const StyledResultItem = styled.li`
  padding: 0.7rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: #333;
    display: block;
  }
`;

export const ResultImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const ResultText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;

  strong {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  small {
    color: #666;
  }
`;
