import { collection, addDoc, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";
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
        allRides.push({...doc.data(), rideId: doc.id});
    });

    const allRidesWithUserData = [];

    for (const ride of allRides) {
        const q = query(collection(db, "users"), where("uid", "==", ride.user_id));

        const querySnapshot = await getDocs(q);

        const userData = [];

        querySnapshot.forEach(doc => {
            userData.push(doc.data());
        })

        if (!(userData.length === 0)) {
            allRidesWithUserData.push({ ...ride, user: {...userData[0]} })
        }
    }

    return allRidesWithUserData;
}

export async function GetRidesById(id) {
    const allRides = [];

    const q = query(collection(db, "rides"), where("user_id", "==", id));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        allRides.push({...doc.data(), rideId: doc.id});
    });

    return allRides;
}

export async function deleteRide(id) {
    const rideRef = doc(db, 'rides', id);

    deleteDoc(rideRef);
}