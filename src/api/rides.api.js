import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase-config';


export function AddRide (departure1, departure_agenda1, destination1, destination_agenda1, extra_info1, price1, user_id1) {

    const docRef = addDoc(collection(db, "rides"), {
        departure: departure1,
        departure_agenda: departure_agenda1,
        destination: destination1,
        destination_agenda: destination_agenda1,
        extra_info:extra_info1,
        price: price1,
        user_id: user_id1
  });

    return docRef;
}

export function GetRide () {

    const querySnapshot = getDocs(collection(db, "rides"));
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    });

    return querySnapshot;
}