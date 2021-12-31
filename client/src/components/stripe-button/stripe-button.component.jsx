import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51K4hkZEDxn7veGKeQG9Joyc05Q0zfB0bI5pC6UMoMI4llH0M3QqqEvLHvTzlU3H5FZWsTHHCGmtRPq3MryjMKgeq00wqPhqOuU';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((resp) => {
        alert('Payment Successful!');
      })
      .catch((err) => {
        console.log('Payment error' + JSON.parse(err));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
