import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
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

    const allRidesWithUserData = [];

    for (const ride of allRides) {
        const q = query(collection(db, "users"), where("uid", "==", ride.user_id));

        const querySnapshot = await getDocs(q);

        const userData = [];

        querySnapshot.forEach(doc => {
            userData.push(doc.data());
        })

        allRidesWithUserData.push({ ...ride, user: {...userData[0]} })
    }

    console.log(allRidesWithUserData)

    return allRidesWithUserData;
}