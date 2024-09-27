import axios from "axios";

const API_URL="http://localhost:8080";
//base url

class productService{
    saveProduct(product){
        return axios.post(API_URL+"/saveProduct",product);
    }

getAllProduct(product)
{
    return axios.get(API_URL+"/");
}

getProductById(id)
{
    return axios.get(API_URL+"/"+id);
}

deleteProduct(id)
    
{
    return axios.delete(`${API_URL}/deleteProduct/${id}`);
}

    

editProduct(product)
{
    return axios.post(API_URL+"/"+product.id,product)
}

}
export default new productService;