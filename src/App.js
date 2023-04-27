import { Route, Routes } from "react-router-dom";

import AbstractEmailTesting from "./Components/AbstractEmailTesting";
import CardDetails from "./Components/CardDetails";
import Cards from "./Components/Cards";
import Emailtesting from "./Components/Emailtesting";
import Header from "./Components/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      {/* <Emailtesting /> */}
      <AbstractEmailTesting/>
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/cartdetails/:id" element={<CardDetails />}></Route>
        {/* <Route path="/emailtesting" element={<Emailtesting/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
