import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CartData';
import { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/action';

const Cards = ()=>{
    const [data,setData]= useState(Cardsdata);
  
    const dispatch = useDispatch();
    const send=(e)=>{

        console.log('cards ka data',e);
        dispatch(ADD(e));
    }


    return(<>
    <div className='container mt-3'>

      <h1 className="text-center">add to cart project</h1>
      
      <div className='row d-flex justify-content-center align-items-center'>
        {data.map((item)=>(<>
            <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
      <Card.Img variant="top" src={item.imgdata} style={{height:"16rem"}} className="mt-3" />
      <Card.Body>
        <Card.Title>{item.rname}</Card.Title>
        <Card.Text>
          price: ₹{item.price}
        </Card.Text>
        <div className=' button_div d-flex justify-content-center'>
        <Button variant="primary" className='col-lg-12' onClick={()=>send(item)}>Add to Cart</Button>
          
        </div>
      </Card.Body>
    </Card>

        </>))}
   
      </div>
    </div>
       
    </>)
 }
 export default Cards;