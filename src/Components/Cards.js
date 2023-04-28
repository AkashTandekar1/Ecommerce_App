import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { ADD } from "../Redux/Actions/Action";
import Cardsdata from "./CardsData";

import "react-toastify/dist/ReactToastify.css";

export default function Cards() {
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast("Item has been added in the cart!");

    // toast.success('🦄 Wow so easy!', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   });
  };

  return (
    <div>
      {Cardsdata.map((res, id) => {
        return (
          <div>
            <Card key={id}
              style={{
                width: '22rem',border:"none"
              }} 
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={res.imgdata}
                style={{height:"16rem"}} className="mt-3"
              />
              <Card.Body>
                <Card.Title>{res.rname}</Card.Title>
                <Card.Text>{res.somedata}</Card.Text>
                <Button variant="primary" onClick={() => send(res)}>
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        );
      })}
    </div>
  );
}
