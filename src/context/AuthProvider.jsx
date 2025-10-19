import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    
    // Create User 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign IN 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Update User Profile
    const updateUserProfile = (updateUser) => {
        updateProfile(auth.currentUser, updateUser)
    }

    // Sign Out
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])





    // Information 
    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};
