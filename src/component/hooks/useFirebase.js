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
const [admin,setAdmin]=useState(false);
  






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

///admin

useEffect(()=>{
  fetch(`https://obscure-peak-03535.herokuapp.com/users/${user?.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data.admin));
},[user?.email]);



    // console.log(admins[0]?.email, admins[0]?.password)

    return{
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        error,
        admin
    }


}
export default  useFirebase;