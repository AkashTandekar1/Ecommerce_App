import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

export default function Emailtesting() {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vl86f3q",
        "template_20oc7bu",
        values.current,
        "tLBGSuno4d_1ZDUoW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log("sdfsf");
  };

  const values = {
    name: "Akash",
    email: "akashtandekar.uk1@gmail.com",
    message: "Hi there",
  };

  return (
    <div>
      <button ref={values} onClick={sendEmail}>
        jjhjhgjkjb
      </button>
    </div>
  );
}
