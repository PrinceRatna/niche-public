import { useEffect, useState } from "react"
import initialize from "../Firebase/firease.init";
import { getAuth, createUserWithEmailAndPassword, signOut,onAuthStateChanged , signInWithEmailAndPassword ,updateProfile} from "firebase/auth";

//initialization  firebase app
initialize();
const useFirebase=()=>{
 const [user,setUser]=useState({});
 const [isLoading,setIsLoading]=useState(true);
 const [error,setError]=useState('');
const auth = getAuth();

// ------------------admin-------------
const [admins,setAdmins]=useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/addAdmin')
      .then(res=>res.json())
      .then(data=>setAdmins(data));
  },[]);







// ----------register---------
const registerUser=(email,password,name,history)=>{
  setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    setError('');
    const newUser={email,displayName:name};
    setUser(newUser);
    //send name to firebase

    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      
    }).catch((error) => {
      
    });

    history.replace('/');

  })
  .catch((error) => {
    const errorMessage = error.message;
    setError( errorMessage);
    
  })
  .finally(()=>setIsLoading(false))

}

// ---------------log in ---------

const loginUser=(email,password,location,history)=>{
  setIsLoading(true)

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // const user = userCredential.user;
    const destination=location?.state?.from||'/';
    history.replace(destination);
    setError('')
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError( errorMessage);

  })
  .finally(()=>setIsLoading(false))

}

// -----------Log out-------------
const logOut=()=>{
  setIsLoading(true)
    signOut(auth)
    .then(() => {
       setError('');
      }).catch((error) => {
        

    
      })
      .finally(()=>setIsLoading(false))


}
 

// -------------------user state change -------------

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user)
  } else {
   setUser({})
  }
  setIsLoading(false);
});
return ()=>unsubscribe;
},[])



    // console.log(admins[0]?.email, admins[0]?.password)

    return{
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        error,
        admins
    }


}
export default  useFirebase;