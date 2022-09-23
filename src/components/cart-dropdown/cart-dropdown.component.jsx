// import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
// import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

import { BaseButton } from "../button/button.styles";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  // const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <BaseButton onClick={goToCheckoutHandler}>Go to Checkout</BaseButton>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
