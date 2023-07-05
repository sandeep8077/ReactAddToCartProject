import Navbare from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import{Routes,Route} from 'react-router-dom';
import Cards from './components/Cards';
import CartDetails from './components/CartDetails';
// import CartData from './components/CartData';

function App() {
  return (
  <>
  <Navbare/>
  <Routes>
    <Route path='/' element={ <Cards/>}/>
    <Route path='/cardDetails/:id' element={<CartDetails/>}/>

    
  </Routes>
 
 

  </>
  );
}

export default App;
