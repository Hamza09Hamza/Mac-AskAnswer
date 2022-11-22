import { Firestore } from "../firebaseConfig";
import { doc, addDoc, getDoc, setDoc, deleteDoc , updateDoc ,getDocs, collection} from "firebase/firestore";

export const createFireStoreWithSpecificID=async (Path,data)=>{
    try {
        await setDoc(doc(Firestore,Path),data)
    } catch (error) {
        console.log(error)
    }
}

export const createFireStore=async (Path,data)=>{
    try {
        await addDoc(collection(Firestore,Path),data)
    } catch (error) {
        console.log(error)
    }
}

export const updateFireStore=async (Path,data)=>{
    try {
        await updateDoc(doc(Firestore,Path),data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteFireStore=async (Path,data)=>{
    try {
        await deleteDoc(doc(Firestore,Path),data)
    } catch (error) {
        console.log(error)
    }
}

export const getDataFireStoreSpecDoc=async (Path)=>{
    try {
       return (await getDoc(doc(Firestore,Path))).data()
    } catch (error) {
        console.log(error)
    }
}


export const getDataFireStoreCollection=async (collectionName)=>{
    try {
        let data=await getDocs(collection(collectionName))
        data=data.docs.map((doc)=>{return {...doc.data(),id:doc.id}})
        return data
    } catch (error) {
        console.log(error)
    }
}

