import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReactToPrint from "react-to-print";

import "./Invoiceapp.css";

export default function Invoice() {
  let componentRef = useRef();
  const getdata = useSelector((state) => state.CartReducer.carts);
  console.log(getdata);

  const [price, setPrice] = useState(0);

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
      <div
        style={{ display: "flex", justifyContent: "end", margin: "20px 20px" }}
      >
        <ReactToPrint
          trigger={() => <Button>Click here to Print !</Button>}
          content={() => componentRef}
        />
      </div>

      <div class="invoice-box" ref={(el) => (componentRef = el)}>
        <table cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6Zvk_Jqb4jjxUPMjZUBaIMGDIEqsKmGcw&usqp=CAU"
                      style={{ width: "100%", maxWidth: "300px" }}
                    />
                  </td>

                  <td>
                    Invoice #: 123
                    <br />
                    Created: May 5, 2023
                    <br />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="information">
            <td colspan="2">
              <table>
                <tr>
                  <td>
                    <strong>Billing Address</strong>
                    <br />
                    Hinjewadi
                    <br />
                    Pune MH 12345
                  </td>

                  <td>
                    Akash Tandekar
                    <br />
                    akash@gmail.com
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr class="heading">
            <td>Items </td> <td>Price</td>
          </tr>

          {getdata.map((res) => (
            <div>
              <tr class="item last">
                <td>{res.rname}</td>
                <td>${res.price}</td>
              </tr>
            </div>
          ))}

          <tr class="total">
            <td></td>
            <td>Total: {price}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
