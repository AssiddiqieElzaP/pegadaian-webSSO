import axios from 'axios';

class ApiService {
  constructor() {
    this.apiService = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`, // Replace with your API URL
    });
  }

  

  setBearerToken() {
   const token = localStorage.getItem('token')
    this.apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  async get(endpoint) {
    try {
      const response = await this.apiService.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

  async post(endpoint, data) {
    try {
      const response = await this.apiService.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  }

  // Add more methods for other HTTP methods as needed
}

export default new ApiService();
