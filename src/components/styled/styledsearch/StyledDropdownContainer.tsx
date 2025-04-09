import styled from "styled-components";

export const StyledDropdownContainer = styled.ul`
  position: absolute;
  top: 90px;

  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0.5rem;
  z-index: 999;
  max-height: 300px;
  overflow-y: auto;
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
