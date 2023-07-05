import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';

import { useParams ,useNavigate} from 'react-router-dom';

import { useEffect } from 'react';
import { useState } from 'react';

import { REMOVE,ADD ,REMOVEONE} from '../redux/action';


const CartDetails = ()=>{
    const dispatch = useDispatch();
    const history = useNavigate();
    const {id}= useParams();
    const [data,setdata]= useState([]);
    const getData = useSelector((state)=>state.cartReducer.carts);
    console.log('item details data',data);
    
    
    // console.log('item details item',getData);

    const compareData = ()=>{
        let data = getData.filter((e)=>{return e.id==id});
        setdata(data)
    }



    const sendData =(item)=>{
        dispatch(ADD(item))
    }

    useEffect(
        ()=>{
            compareData();

        },[id]
    )

    const remove = (id)=>{
           dispatch(REMOVE(id));
           history('/');
    }

    const rmvone = (item)=>{
        dispatch(REMOVEONE(item))
    }



    return(<>
  <div className="container mt-2">
        <h2 className='text-center'>Items Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
            {data.map((e)=>(<>

                <div className="items_img">
              <img src={e.imgdata} alt="coming soon" />
         </div>

         <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Restaurant</strong>: {e.rname} </p>
                    <p> <strong>Price</strong>  :₹{e.price}</p>
                    <p> <strong>Dishes</strong>  :{e.address}</p>
                    <p> <strong>Total</strong>  :₹ {e.price * e.qnty}  </p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={e.qnty<=1? ()=>remove(e.id):()=>rmvone(e)}>- </span>
                    <span style={{fontSize:22}}>{e.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>sendData(e)} >+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :{e.rating}</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}> ★	</span></p>
                    <p><strong>Order Review :{e.somedata}</strong> <span >	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash'  style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>remove(e.id)}></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>

            </>))}
         



           </div>
        </section>
 </div>
    </>)
 }
 export default CartDetails;