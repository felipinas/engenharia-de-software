import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';

export function AddRide(rideData) {

    const {
        departure,
        departure_agenda,
        destination,
        destination_agenda,
        extra_info,
        price,
        user_id
    } = rideData;

    const docRef = addDoc(collection(db, "rides"), {
        departure,
        departure_agenda,
        destination,
        destination_agenda,
        extra_info,
        price,
        user_id
    });

    return docRef;
}

export async function GetRides() {

    const allRides = [];

    const querySnapshot = await getDocs(collection(db, "rides"));

    querySnapshot.forEach((doc) => {
        allRides.push(doc.data());
    });

    return allRides;
}