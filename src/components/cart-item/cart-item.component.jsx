// import "./cart-item.styles.scss";
import {
  NameSpan,
  PriceSpan,
  Img,
  ItemDetails,
  CartItemContainer,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />

      <ItemDetails>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>
          {quantity} x ${price}
        </PriceSpan>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
