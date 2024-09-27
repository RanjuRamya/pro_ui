
import { Route, Routes } from 'react-router-dom';
import'./App.css';
import Navbar from './components/Navbar';
import Homepro from './components/Homepro';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';



function App() {
  return (
   <>
    
    <Navbar/>

    <Routes>
      <Route path='/' element={<Homepro/>}> </Route>
      
      <Route path='/addProduct' element={<AddProduct/>} > </Route>
   
      <Route path='/editProduct' element={<EditProduct/>} > </Route>

    </Routes>
    </>

  );
}
export default App;
