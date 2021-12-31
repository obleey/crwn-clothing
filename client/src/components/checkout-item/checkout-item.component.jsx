import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItemHandler = (item) => dispatch(clearItemFromCart(item));
  const addItemHandler = (item) => dispatch(addItem(item));
  const removeItemHandler = (item) => dispatch(removeItem(item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItemHandler(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemHandler(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemHandler(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
