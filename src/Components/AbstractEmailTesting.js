import React from "react";

export default function AbstractEmailTesting() {
  const apiKey = "YOUR_API_KEY";
  const apiURL =
    "https://emailvalidation.abstractapi.com/v1/?api_key=" + apiKey;
  const sendEmailValidationRequest = async (email) => {
    try {
      const response = await fetch(apiURL + "&email=" + email);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  // const sendEmailValidationRequestChange = async (email) => {
  //     try {
  //         const response = await fetch(apiURL + '&email=' + email);
  //         const data = await response.json();
  //         const isValidSMTP = data.is_smtp_valid.value;

  //         if (isValidSMTP) {
  //             // use the email address in the mailto link
  //         } else {
  //             // show the user an error
  //         }
  //     } catch (error) {
  //         throw error;
  //     }
  // }

  return (
    <div>
      <a href="mailto:email@example.com?subject='Hello from Abstract!'&body='Just popped in to say hello'">
        Click to Send an Email
      </a>
    </div>
  );
}
