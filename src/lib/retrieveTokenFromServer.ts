


import { auth } from "./auth";
import { headers } from "next/headers";

// token retrieving from server
export const retrieveTokenFromServer = async() =>{

      
   const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });

  const token = jwtToken?.token ?? null;

  return token;

}


