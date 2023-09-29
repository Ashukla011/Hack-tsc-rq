import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
 
Toast
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query"; // Import React Query
import axios  from "axios";
export const SignUp = () => {
 
  const navigate=useNavigate()
  interface UserData {
    name: string;
    email: string;
    phoneNumber: string;
    referralCode: string;

  }
  const [name, setName]= useState <string>("");
  const [email, setEmail]= useState <string>("");
  const [phoneNumber, setPhoneNumber] = useState <string>("");
  const [referralCode, setReferralCode] = useState <string >("");



  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const isEmailValid = emailRegex.test(email);
  const isPhoneValid = /^\d{10}$/.test(phoneNumber) && phoneNumber.length === 10;
  const isEnabled = name && isEmailValid && isPhoneValid;
 
  // Define the signup mutation using React Query
  const signupMutation = useMutation((userData:UserData) =>
    axios.post(`https://agreeable-calf-coat.cyclic.cloud/user/register`, {
       userData,
      }  )
     
  );
  // console.log(signupMutation)
  
  //  if (signupMutation.isSuccess){
   
  //   localStorage.setItem("Token",JSON.stringify(data && data.data))
  //  }
   const submitUserData=():void =>{
         if(isEnabled){
          signupMutation.mutate({name,email,phoneNumber,referralCode})
           Toast({
          title: "OTP send to your mobile number.",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: false,
        
        });
            navigate("../Page/SignupOtp.tsx")
         }
     
        
   }

  return (
      <>
       <Box width={'30%'} m='auto'>
       <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='text' value={name} onChange={(e)=>setName(e.target.value )} required/>
        <FormLabel>Email Address</FormLabel>
        <Input  type ="email" value ={email} onChange={(e)=>setEmail(e.target.value )} required/>
        <FormControl>Phone Number</FormControl>
        <Input type="phone" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value )}required/>
        <FormControl>Refeeral Code (Optional)</FormControl>
        <Input type='text' value={referralCode}  onChange={(e)=>setReferralCode(e.target.value )}/>

         <Button onClick=  {submitUserData}>Sign Up </Button>
      </FormControl>
       </Box>
      </>
  );
};





