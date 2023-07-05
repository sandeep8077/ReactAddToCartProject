import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Table from 'react-bootstrap/Table'
import { useDispatch } from 'react-redux';
import { REMOVE } from '../redux/action';


const Navbare = ()=>{
    const dispatch = useDispatch();
    const [total,setTotal]= useState();
    console.log('total is ', total);


    const getData =  useSelector((state)=>state.cartReducer.carts);
    console.log(getData);

    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const remove = (id)=>{
        dispatch(REMOVE(id));
 }


    const handleClose = () => {
      setAnchorEl(null);
    };



    const priceData = ()=>{
        let price= 0;
        getData.map((e)=>{price=e.price * e.qnty+price});
        setTotal(price);
        }

        // console.log('price data',priceData);

        useEffect(()=>{
            priceData();
        },[priceData]);
        
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark" style={{height:'60px'}}>
        <Container>
          
          <Nav className="me-auto">
            <NavLink className='text-decoration-none text-light mx-3 ' to="/">Add to cart</NavLink>
            <NavLink className='text-decoration-none text-light mx-3 ' to="/home">Home</NavLink>
        
          </Nav>

          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
              <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{fontSize:'30px',cursor:'pointer'}}></i>
         </Badge>

         <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {getData.length?
         <div className='cart-details' style={{width:'24rem',padding:10}}>
         <Table>
            <thead>
            <tr>
                <th>Photo</th>
                <th>Restourant</th>
            </tr>
             </thead>
             <tbody>
                {getData.map((e)=>(<>
                   <tr>
                    <td>
                        <NavLink to={`/cardDetails/${e.id}`} onClick={handleClose}>
                           <img src={e.imgdata} alt="" style={{width:'5rem',height:'5rem'}} />   
                        </NavLink>
                        
                    </td>
                    <td>
                        <p>{e.rname}</p>
                        <p>Price:₹ {e.price}</p>
                        <p>Quantity: {e.qnty}</p>
                        <p>
                            <i className='fas fa-trash smalltrash' style={{color:'red',cursor:'pointer',fontSize:20}} onClick={()=>remove(e.id)}></i>
                        </p>
                    </td>
                    <td>
                        <p><i className='fas fa-trash ' style={{color:'red',cursor:'pointer',fontSize:20}} onClick={()=>remove(e.id)}></i></p>
                    </td>
                   </tr>
                </>))}
                <p className='text-center'>Totel:₹ {total}</p>
             </tbody>
             
           
            
         </Table>
         </div>:
         <div className='cart-details d-flex justify-content-center align-items-center' style={{position:'relative' ,width:'24rem',padding:10}}>
         <i className='fas fa-close' 
           style={{position:'absolute', top:2,right:20,cursor:'pointer'}}
           onClick={handleClose}></i>
         <p style={{fontSize:22}}>Your cart is empty</p>
         <img  style={{width:'5rem',padding:10}} src="./cart.gif" alt="" />
       </div>
         }

       
      </Menu>
        </Container>
      </Navbar>
        </>
    )
}

export default Navbare;