import React, { useRef } from 'react';
import { useSelector } from "react-redux";

import "./Invoiceapp.css";

export default function Invoice() {

    // const componentRef = useRef();
    const getdata = useSelector((state) => state.CartReducer.carts);
    console.log(getdata)

    
  return (
    <div>
      
      {/* <div class="invoice-box" ref={el => (componentRef = el)}> */}
      <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
          <tr class="top">
            <td colspan="2">
              <table>
                <tr>
                  <td class="title">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpe6Zvk_Jqb4jjxUPMjZUBaIMGDIEqsKmGcw&usqp=CAU"
                      style={{width: "100%",maxWidth: "300px"}}
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
        
          
         {
            getdata.map((res) => (
                <div>
                    <tr class="item last">
                       <td>{res.rname}</td>
                       <td>${res.price}</td>
                   </tr>
                </div>
            ))
         }
       
          <tr class="total">
            <td></td><td>Total: $85.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
