import React from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {


    // sign in with google 
    const SignInWithGoogle = ()=>{
        return signInWithPopup(auth,provider);
    }

    const userInfo ={
        SignInWithGoogle
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;