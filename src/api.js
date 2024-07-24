// api.js
import axios from 'axios';

// Common headers configuration
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE', // Replace with your token if needed
  },
};

// GET request
export const fetchData = async (url) => {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error('GET error:', error);
    throw error;
  }
};

// // // POST request
// // export const postData = async (url, data) => {
// //   try {
// //     const response = await axios.post(url, data, config);
// //     return response.data;
// //   } catch (error) {
// //     console.error('POST error:', error);
// //     throw error;
// //   }
// // };

// // // PUT request
// // export const putData = async (url, data) => {
// //   try {
// //     const response = await axios.put(url, data, config);
// //     return response.data;
// //   } catch (error) {
// //     console.error('PUT error:', error);
// //     throw error;
// //   }
// // };

// // // DELETE request
// // export const deleteData = async (url) => {
// //   try {
// //     const response = await axios.delete(url, config);
// //     return response.data;
// //   } catch (error) {
// //     console.error('DELETE error:', error);
// //     throw error;
// //   }
// };
