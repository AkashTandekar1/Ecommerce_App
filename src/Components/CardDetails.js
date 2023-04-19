import React from 'react'
import Table from 'react-bootstrap/Table'

export default function CardDetails() {
  return (
    <div>
        
        <div className="container mt-2">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          <div className="items_img">
              <img src="https://b.zmtcdn.com/data/pictures/chains/5/19295245/089cbcf1d3307542c72f77272556b28b_o2_featured_v2.jpg?output-format=webp" alt="" />
            </div>


            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>  : Jugaadi Adda</p>
                    <p> <strong>Price</strong>  : ₹ 25</p>
                    <p> <strong>Dishes</strong>  : Street Food</p>
                    <p> <strong>Total</strong>  :₹  1</p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}}>-</span>
                    <span style={{fontSize:22}}>0</span>
                    <span style={{fontSize:24}}>+</span>

                    </div>

                    </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>4.5 ★	</span></p>
                    <p><strong>Order Review :</strong> <span >product is good</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
            </div>
        </section>
      </div>


    </div>
  )
}



