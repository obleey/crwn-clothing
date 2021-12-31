import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-styles.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItemHandler = (item) => dispatch(addItem(item));

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemHandler(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
