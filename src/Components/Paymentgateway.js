import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

import Emailtesting from "./Emailtesting";

export default function Paymentgateway() {
  const [carddata, setcardData] = useState(null);
  const [success, setSucess] = useState(false);

  const onToken = (token) => {
    console.log(token);

    const {
      card: { funding },
    } = token;

    setcardData(funding);
    console.log("After destructure" + JSON.stringify(funding));

    setSucess(true);

    console.log("Akash tttt");
  };

  return (
    <div>
      {success ? (
        ""
      ) : (
        <StripeCheckout
          name="Add card details"
          token={onToken}
          stripeKey="pk_test_51MzI9tSDsFvXK5oeoL5zoyqvWb80mVuR7CQgS2M7WXpkwyj6QTgzgJKx8eJEzrBbCuInv9llem4T2rVEeZDE3k1700aIKhGR9T"
        />
      )}

      {success ? <Emailtesting /> : ""}
    </div>
  );
}
