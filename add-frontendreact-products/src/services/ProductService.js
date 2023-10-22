import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/products"; // Common base URL

class ProductService {
    // Get all products
    getProducts() {
        return axios.get(`${BASE_URL}/findAll`);
    }

    // Create a product
    createProduct(product) {
        return axios.post(`${BASE_URL}/findAll`, product);
    }

    // Get a product by ID
    getProductById(productId) {
        return axios.get(`${BASE_URL}/findAll/${productId}`);
    }

    // Update a product by ID
    updateProduct(product, productId) {
        return axios.put(`${BASE_URL}/findAll/${productId}`, product);
    }

    // Delete a product by ID
    deleteProduct(productId) {
        return axios.delete(`${BASE_URL}/findAll/${productId}`);
    }
}

export default new ProductService();
