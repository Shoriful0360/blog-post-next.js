import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

import { LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default async function  page () {

  const {getUser,isAuthenticated} = getKindeServerSession();
  const user = await getUser();

 
  return (await isAuthenticated()) ? (
    <div className="md:w-8/12 mt-5  shadow-2xl mx-auto">
    <h1 className="text-center">Well Come ,<span>{user?.given_name}</span> </h1>
   
    
       </div>
  ) : (
    <div className="text-center mt-4">
      This page is protected, please <span className="text-red-400"><LoginLink>Login</LoginLink> </span>to view it
    </div>
  );

}

