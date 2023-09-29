import React, { useState } from 'react';
import useVerifyOTP from '../components/VerifyOTP'; // Import the mutation hook
import {Input,Button} from '@chakra-ui/react'
export const SignupOtp = () => {
  const [otp, setOtp] = useState('');
  const { mutate, isLoading, isError, error, data } = useVerifyOTP();

  const handleVerify = () => {
    // Call the mutation with the OTP value
    mutate(otp);
  };

  return (
    <>
      <Input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <Button onClick={handleVerify} disabled={isLoading}>
        Verify OTP
      </Button>
      {isLoading && <p>Verifying...</p>}
      {isError && <p>Error </p>} {/*{error?.message}*/}
      {data && <p>Verification successful!</p>}
    </>
  );
};


