import React,{useEffect,useState} from 'react'
import productservice from '../service/productservice';
import { Link } from 'react-router-dom'


const Homepro = () => {
const [productList,setProductList]=useState([]);

const [msg,setMsg]=useState("");

useEffect(()=>{

},[]);
const init=() =>
{  
  productservice.getAllProduct().then((res)=>{
    console.log(res.data);

    setProductList(res.data);

  }).catch((error)=>{
    console.log(error);
  });
}


const deleteProduct=(id)=>{
productservice.deleteProduct(id).then((res)=>{
  setMsg("deleted successfully")
  init();



}).catch((error)=>{
  console.log(error);
});


};



  return (
    <>
   <div className='container'>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header fs-3 text-center">
            All Product list 
           {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>
<div className="card-body">
          <table className="table">
  <thead>
    
        <tr>
        <th scope="col">Sl no</th>
        <th scope="col">Product name</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>

  

  </thead>
  <tbody>
    {productList.map((p,num)=>(
    <tr>
      <td>{num+1}</td>
      <td>{p.productname}</td>
      <td>{p.description}</td>
      <td>{p.price}</td>
      <td>{p.status}</td>
      <td>
        <Link to="" className="btn-btn-sm btn-primary">Edit</Link>
        <button onClick={()=>deleteProduct(p.id)} className="btn-btn-sm btn-danger ms-1">Delete</button>
      </td>
    </tr>
    ))}
  </tbody>
</table>
          </div>

        </div>
      </div>
    </div>
   </div>

    </>
  )
}

export default Homepro