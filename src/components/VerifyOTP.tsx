import { useMutation } from 'react-query';
import axios from 'axios';
// Define the mutation function
const verifyOTP = async (otp: string) => {
  const response = await axios.post('https://agreeable-calf-coat.cyclic.cloud/user/verify-register', {
    otp,
    headers: {
        Authorization: `Bearer ${localStorage.getItem(JSON.parse("Token"))}}`,
      },
  });
  return response.data; // Assuming the API returns data upon successful verification
};

// Create a mutation using React Query
const useVerifyOTP = () => {
  return useMutation(verifyOTP);
};

export default useVerifyOTP;