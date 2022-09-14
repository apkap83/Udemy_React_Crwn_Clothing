// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";

import { setIsCartOpen } from "../../store/cart/cart.action";
// import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
