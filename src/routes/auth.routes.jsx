import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { NotFound } from '../pages/NotFound'


export function AuthRoutes(){
    return( 
       <Routes>
         <Route path="/singup" element={<SignUp />} />
         <Route path="/" element={<SignIn />} />

         <Route path="*" exact={true} element={<NotFound />} />

       </Routes>
    );
 }