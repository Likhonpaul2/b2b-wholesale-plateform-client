import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser]= useState(null);
    const [loading,setLoading]= useState(false);


    // sign in with google 
    const SignInWithGoogle = () => {
        setLoading(false);
        return signInWithPopup(auth, GoogleProvider)
    }
    
    // signIn with email & pass 
    const SignInEmailAndPass =(email,password)=>{
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password)
    }

    // auth holder 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(true);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userInfo = {
        user,
        loading,
        SignInWithGoogle,
        SignInEmailAndPass,
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;