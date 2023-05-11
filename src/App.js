import { Route, Routes } from "react-router-dom";

import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Cards";
import Chatbotlatest from "./Components/Chatbotlatest";
import Header from "./Components/Header";
import Invoice from "./Components/Invoice";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />

    
      <Chatbotlatest />
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/cartdetails/:id" element={<CardDetails />}></Route>
        <Route path="/invoice" element={<Invoice />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
