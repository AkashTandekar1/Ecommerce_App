import React from "react";
import { useState } from "react";

export default function AbstractEmailTesting() {




  const [email, setEmail] = useState("akashtandekar.uk1@gmail.com");
  const [subject, setSubject] = useState(
    "Trying Abstract API email service"
  );
  const [body, setBody] = useState(
    "Hello there"
  );

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

  const sendEmailValidationRequestChange = async (email) => {
      try {
          const response = await fetch(apiURL + '&email=' + email);
          const data = await response.json();
          const isValidSMTP = data.is_smtp_valid.value;

          if (isValidSMTP) {
              // use the email address in the mailto link
          } else {
              // show the user an error
          }
      } catch (error) {
          throw error;
      }
  }

  return (
    <div>
      <a href="mailto:`${email}`?subject=`${subject}`&body=`${body}`">Click to Send an Email</a>
    </div>
  );
}








// Expected outout after successfully mail get sent.

// const expectedabstractoutput = {
//   "email": "eric@abstractapi.com",
//   "autocorrect": "",
//   "deliverability": "DELIVERABLE",
//   "quality_score": "0.80",
//   "is_valid_format": {
//   "value": true,
//   "text": "TRUE"
//   },
//   "is_free_email": {
//   "value": false,
//   "text": "FALSE"
//   },
//   "is_disposable_email": {
//   "value": false,
//   "text": "FALSE"
//   },
//   "is_role_email": {
//   "value": false,
//   "text": "FALSE"
//   },
//   "is_catchall_email": {
//   "value": true,
//   "text": "TRUE"
//   },
//   "is_mx_found": {
//   "value": true,
//   "text": "TRUE"
//   },
//   "is_smtp_valid": {
//   "value": true,
//   "text": "TRUE"
//   }
//   }
