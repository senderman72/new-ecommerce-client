import React, { useContext, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import {
  NavigationWrapper,
  NavigationList,
  NavigationLink,
  HamburgerButton,
  MobileMenuWrapper,
} from "../styled/styledNavigation/NavigationWrapper";
import { CartIndicator } from "../styled/styledNavigation/CartIndicator";
import { CartContext } from "../../contexts/CartContext";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import SearchInput from "../searchfunction/SearchInput";

const Navigation = () => {
  const cartContext = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!cartContext) return null;
  const { cartCount } = cartContext;

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <NavigationWrapper>
      <MobileMenuWrapper>
        <HamburgerButton onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerButton>

        <NavigationList open={menuOpen}>
          <li>
            <NavigationLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </NavigationLink>
          </li>
          <li>
            <NavigationLink to="/admin" onClick={() => setMenuOpen(false)}>
              Admin
            </NavigationLink>
          </li>
        </NavigationList>
      </MobileMenuWrapper>

      <SearchInput />
      <div onClick={toggleCart} style={{ cursor: "pointer" }}>
        <LuShoppingCart size={40} />
        {cartCount > 0 && <CartIndicator>{cartCount}</CartIndicator>}
      </div>
      {isCartOpen && <ShoppingCart isOpen={isCartOpen} />}
    </NavigationWrapper>
  );
};

export default Navigation;
