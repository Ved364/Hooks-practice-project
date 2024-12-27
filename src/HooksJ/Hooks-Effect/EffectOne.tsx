
import React, { useState, useEffect} from 'react';


const apiURL ="https://jsonplaceholder.typicode.com/users";
 
 const EffectOne: React.FC = () => {
    const [userData, setUserData] = useState([]);
    const[loading, setLoading] = useState(false);
    const[isError, setIsError]= useState({status:false, msg:""});

    const fetchUserData = async (apiURL: string) => {
        setLoading(true)
        setIsError({status:false, msg:""})
      try{  
        const response = await fetch(apiURL);

        const data = await response.json();
        setUserData(data);
        setLoading(false);
        setIsError({status:false, msg:""})
        if(response.status === 404){
            throw new Error("data not found");
        }
      }catch(error){
      setLoading(false)
      setIsError({status:true, msg: Error.message || "something went wrong. Please try again!"})
      }

    }

    useEffect (() => {
    fetchUserData(apiURL);
    },[]);



    if(loading){
     return(
        <div>
            <h1>Loading.....</h1>
        </div>
     ) 
    }

    if(isError ?.status){
        return(
         <div>
       <h2>{isError.msg}</h2>
         </div>
      )
    }


    


    

     
  return (
   
   <div><h1>userdata - 1</h1>
    <ul>
    {
        userData.map((eachUser) => {
            const{id,name, username, email } =eachUser;
            return    (
                <li key = {id}>
               <div> {name} </div>
               <div> {username} </div>
               <div> {email} </div>
               </li>
        )

        }
    )
        
    }
    </ul>

    </div> 
    
  );
};
export default EffectOne;