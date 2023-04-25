import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { ADD, DLT, REMOVE } from "../Redux/Actions/Action";

export default function CardDetails() {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  console.log("dgdfg" + id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.CartReducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
    toast("Item has been added in the cart!");
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    toast("Item Deleted!");
    history("/");
  };

  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item));
    toast("Item Deleted!");
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>

      <section className="container mt-3">
        <div className="iteamsdetails">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} alt="" />
                </div>

                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          {" "}
                          <strong>Restaurant</strong> : {ele.rname}
                        </p>
                        <p>
                          {" "}
                          <strong>Price</strong> : ₹{ele.price}
                        </p>
                        <p>
                          {" "}
                          <strong>Dishes</strong> : {ele.address}
                        </p>
                        <p>
                          {" "}
                          <strong>Total</strong> :₹ {ele.price * ele.qnty}
                        </p>
                        <div
                          className="mt-5 d-flex justify-content-between align-items-center"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            background: "#ddd",
                            color: "#111",
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={
                              ele.qnty <= 1
                                ? () => dlt(ele.id)
                                : () => remove(ele)
                            }
                          >
                            -
                          </span>
                          <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(ele)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating :</strong>{" "}
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {ele.rating} ★{" "}
                          </span>
                        </p>
                        <p>
                          <strong>Order Review :</strong>{" "}
                          <span>{ele.somedata} </span>
                        </p>
                        <p>
                          <strong>Remove :</strong>{" "}
                          <span>
                            <i
                              className="fas fa-trash"
                              onClick={() => dlt(ele.id)}
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            ></i>{" "}
                          </span>
                        </p>
                      </td>
                    </tr>
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
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
