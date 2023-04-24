import React from "react";
import StripeCheckout from 'react-stripe-checkout';

export default function Paymentgateway({totaldata}) {
  
  const onToken = (token) => {
     console.log(token)
  }
  

  return (
    <div>
               <StripeCheckout name={totaldata} 
        token={onToken}
        stripeKey="pk_test_51MzI9tSDsFvXK5oeoL5zoyqvWb80mVuR7CQgS2M7WXpkwyj6QTgzgJKx8eJEzrBbCuInv9llem4T2rVEeZDE3k1700aIKhGR9T"
      /> 
             
    </div>
  );
}
