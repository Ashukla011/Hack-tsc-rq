

import { Events } from "../Page/Events";
import { SignUp } from "../Page/SignUp";
import { LoginOtp } from "../Page/LoginOtp";
import { SignupOtp } from "../Page/SignupOtp";
import { NotFound } from "../Page/NotFound";
import {Login} from '../Page/Login'
import {Routes,Route} from 'react-router-dom'


  const AllRoutes = () => {
   return (
     <>
        
        <Routes>
         <Route path="/" element={<Events/>}></Route>
         <Route path="/signUp" element={<SignUp/>}></Route>
         <Route path="/signupOtp" element={<SignupOtp/>}></Route>
         <Route path="/loginOtp" element={<Login/>}></Route>
         <Route path="/loginOtp" element={<LoginOtp/>}></Route>
         <Route path="*" element={<NotFound/>}></Route>

        </Routes>
     </>
   )
 }
 export default AllRoutes
 