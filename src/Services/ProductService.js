import axios from "axios";
const API_URL = "http://localhost:4000/products";


class ProductService{
    getAllProducts(){
        return axios.get(API_URL);
    }
    createProduct(product){
        return axios.post(API_URL, product);
    }
    deleteProduct(id){
        return axios.delete(API_URL + '/' + id);
    }
    getProductById(id){
        return axios.get(API_URL + '/' + id);
    }
    updateProduct(id, product){
        return axios.put(API_URL + '/' + id,product);
    }
}

const productServiceInstance = new ProductService();
export default productServiceInstance;