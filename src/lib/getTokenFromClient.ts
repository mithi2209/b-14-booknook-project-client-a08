


// get token from client 


import { authClient } from "./auth-client";

export const getTokenFromClient = async () =>{
  
    const { data , error } = await authClient.token() ;
     const token = data?.token;

    if (error || !data?.token) {
        return null;
    }

      
        return token ;

};
  
  
       