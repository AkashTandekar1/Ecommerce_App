import React from "react";
import ChatBot from "react-simple-chatbot";
import "../Styles/Chatbotdesign.css";
import { ThemeProvider } from "styled-components";

export default function Chatbotlatest() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our shop",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Product Information",
          label: "Product Information",
          trigger: "Product Information",
        },
        {
          value: "Order related queries",
          label: "Order related queries",
          trigger: "Order related queries",
        },
      ],
    },
    {
      id: "Product Information",
      message:
        "Thanks for letting your issue regarding Product, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Order related queries",
      message:
        "Thanks for letting your issue regarding Order, Our team will resolve your issue ASAP",
      end: true,
    },
  ];

  const theme = {
    background: "#C9FF8F",
    headerBgColor: "#197B22",
    headerFontSize: "20px",
    botBubbleColor: "#0F3789",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#FF5733",
    userFontColor: "white",
  };

  const config = {
    floating: true,
  };

  return (
    <div>
      <div className="akash">
        <ThemeProvider theme={theme}>
          <ChatBot headerTitle="Ask Eva!" steps={steps} {...config} />
        </ThemeProvider>
      </div>
    </div>
  );
}
