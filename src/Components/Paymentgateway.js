import React from "react";
// import StripeCheckout from "react-stripe-checkout";
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';



export default function Paymentgateway() {
  

    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };
  

  return (
    <div>
      {/* <StripeCheckout token={onToken} name="Online shopping store"
       currency="Inr" amount={200} stripeKey="pk_test_51MzI9tSDsFvXK5oeoL5zoyqvWb80mVuR7CQgS2M7WXpkwyj6QTgzgJKx8eJEzrBbCuInv9llem4T2rVEeZDE3k1700aIKhGR9T">
      </StripeCheckout> */}

<form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
    </div>
  );
}
