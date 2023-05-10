import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import { ADD } from "../Redux/Actions/Action";
import Cardsdata from "./CardsData";
import "../App.css";
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

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = Cardsdata.slice(
    pagesVisited,
    pagesVisited + usersPerPage
  ).map((res, id) => {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Card
            key={id}
            style={{
              width: "22rem",
              border: "none",
            }}
            className="mx-2 mt-4 card_style"
          >
            <Card.Img
              variant="top"
              src={res.imgdata}
              style={{ height: "16rem" }}
              className="mt-3"
            />
            <Card.Body>
              <Card.Title>{res.rname}</Card.Title>
              <Card.Text>{res.somedata}</Card.Text>
              <Button variant="primary" onClick={() => send(res)}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
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
  });

  const pageCount = Math.ceil(Cardsdata.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="pagination">{displayUsers}</div>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
