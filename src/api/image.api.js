import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from "firebase/storage";

export const imageApi = {
    upload: async file => {
        const metadata = { contentType: 'image/png' };
            
        const storage = getStorage();

        const storageRef = ref(storage, file.name);
            
        await uploadBytes(storageRef, file, metadata);

        const linkImage = await getDownloadURL(storageRef);

        return linkImage;
    },
    delete: async photoUrl => {
        const storage = getStorage();

        const storageRefDeleted = ref(storage, photoUrl);

        await deleteObject(storageRefDeleted);
    }
}