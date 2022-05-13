import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";

import { imageApi } from './image.api';

import { auth, db } from '../firebase-config';

export const userApi = {
    create: async data => {
        const { photo, name, email, phoneNumber, password } = data;
        const userPhoto = await (photo ? imageApi.upload(photo) : "");

        const user = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: userPhoto
        })
        
        const { uid } = user.user;
        const usersCollectionRef = collection(db, 'users');

        await addDoc(usersCollectionRef, {
            uid,
            photo: userPhoto,
            name,
            email,
            phoneNumber
        })

        await sendEmailVerification(auth.currentUser);
    },
    login: async (email, password) => {
       return await signInWithEmailAndPassword(
            auth, 
            email,
            password
        )
    },
    logout: async () => {
        signOut(auth);
    },
    getInfoById: async id => {
        const usersRef = collection(db, 'users');

        const q = query(usersRef, where('uid', '==', id))

        let result = [];

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            result.push(doc.data());
        })

        return result[0];
    }
}