import Badge from "@mui/material/Badge";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/esm/Table";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { toast, ToastContainer } from "react-toastify";

import { DLT } from "../Redux/Actions/Action";
import Invoice from "./Invoice";
import Paymentgateway from "./Paymentgateway";
import Cards from "./Cards";

export default function Header() {
  const getdata = useSelector((state) => state.CartReducer.carts);
  console.log(getdata);

  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const dlt = (id) => {
    dispatch(DLT(id));
    toast("Item Deleted!");
  };

  // const HandlePrintone = () => {
  //   useReactToPrint({
  //     content: () => componentRef.current,
  //   })

  //   return (
  //     <Invoice ref={componentRef}/>
  //   )
  // }

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shopping app</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">
              Home
            </NavLink>

            <NavLink
              to="/invoice"
              className="text-decoration-none text-light mx-3"
            >
              Invoice
            </NavLink>

            {/* <ReactToPrint 
               trigger={() => {
                return <div>Click here to print</div>
               }}
               content={() => componentRef}

               documentTitle="new document"
               pageStyle={"print"}
               onAfterPrint={() => {
                console.log("document printed")

               }}
               /> */}
            {/* <div style={{display: "none"}}>
               <Invoice ref={componentRef}/> 
               </div>
               <div onClick={HandlePrintone}>Click here to print</div> */}

            {/* <div onClick={HandlePrintone}>click here to print</div> */}

            {/* <NavLink to='/cartdetails' className="text-decoration-none text-light">CardDetails</NavLink>   */}
          </Nav>

          <Badge
            badgeContent={getdata.length}
            color="primary"
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <i
              class="fa fa-shopping-cart text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
              aria-hidden="true"
            ></i>
          </Badge>
        </Container>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              {getdata.length ? (
                <div
                  className="card_details"
                  style={{ width: "24rem", padding: 10 }}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getdata.map((e) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink
                                  to={`/cartdetails/${e.id}`}
                                  onClick={handleClose}
                                >
                                  <img
                                    src={e.imgdata}
                                    style={{ width: "5rem", height: "5rem" }}
                                    alt=""
                                  />
                                </NavLink>
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price : ₹{e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p
                                  style={{
                                    color: "red",
                                    fontSize: 20,
                                    cursor: "pointer",
                                  }}
                                  onClick={() => dlt(e.id)}
                                >
                                  <i className="fas fa-trash smalltrash"></i>
                                </p>
                              </td>

                              <td
                                className="mt-5"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                <i className="fas fa-trash largetrash"></i>
                              </td>
                            </tr>
                            {/* <tr>
                              <td className="text-center">
                                <Paymentgateway />
                              </td>
                            </tr> */}
                            {/* <ToastContainer
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
                            /> */}
                          </>
                        );
                      })}
                      <p className="text-center">Total :₹ {price}</p>
                      <Paymentgateway />
                    </tbody>
                  </Table>
                </div>
              ) : (
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem>
                        your cart is empty{" "}
                        <i
                          class="fa fa-times"
                          aria-hidden="true"
                          style={{ margin: "5px" }}
                          onClick={handleClose}
                        ></i>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              )}
            </Grow>
          )}
        </Popper>
      </Navbar>
      
    </div>
  );
}
