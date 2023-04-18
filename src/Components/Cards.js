import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardsData';
import { useDispatch } from 'react-redux';
import {ADD} from '../Redux/Actions/Action';

export default function Cards() {

    const dispatch = useDispatch()

   const send = (e) => {
        dispatch(ADD(e))
     
    }

  return (
    <div>

{
    Cardsdata.map((res,id) => {
        return (
            <div>
                <Card style={{ width: '18rem',margin:"20px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <Card.Img variant="top" src={res.imgdata} style={{height:"16rem"}} />
      <Card.Body>
        <Card.Title>{res.rname}</Card.Title>
        <Card.Text>
          {res.somedata}
        </Card.Text>
        <Button variant="primary" onClick={() => send(res)}>Add to cart</Button>
      </Card.Body>
    </Card>
            </div>
        )
    })
}
    </div>
  )
}
