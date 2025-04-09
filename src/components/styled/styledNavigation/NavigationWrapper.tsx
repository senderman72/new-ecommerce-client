import { NavLink } from "react-router";
import styled from "styled-components";
import { primaryColor } from "../GeneralStyles";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 11dvh;
  background-color: ${primaryColor};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const MobileMenuWrapper = styled.div`
  position: relative;
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span {
    display: block;
    width: 30px;
    height: 2px;
    margin: 3px;
    background: white;
  }
`;

interface NavigationListProps {
  open: boolean;
}

export const NavigationList = styled.ul<NavigationListProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #333;
    position: absolute;
    top: 57px;
    left: -32px;
    width: 200px;
    padding: 2rem;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &.active {
    text-decoration: underline;
  }
`;
