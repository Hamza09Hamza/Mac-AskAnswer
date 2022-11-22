import { deleteObject, list, listAll, ref } from "firebase/storage";
import { Storage } from "../firebaseConfig";


export const sendDataStorage=async (path,file)=>{
   try {
       await uploadBytes(ref(Storage,path), file)
   } catch (error) {
        console.log(error);
   } 
}

export const getUrlStorage=async (Path)=>{
   try {
        return await getDownloadURL(ref(Storage, Path))
   } catch (error) {
        switch (error.code) {
      case 'storage/object-not-found':
        console.log( "File doesn't exist")
        break;

      case 'storage/unauthorized':
        console.log(" User doesn't have permission to access the object")
        break;

      case 'storage/canceled':
        console.log( "User canceled the upload")
        break;

      case 'storage/invalid-url':
        console.log( "Invalide URl !")
        break;

      case 'storage/unknown':
        console.log("Unknown error occurred, inspect the server response")
        break;

   }
   
}
}


export const DeleteData= async (Path)=>{
    try {
        await deleteObject(ref(Storage,Path))
    } catch (error) {
         console.log(error);
    } 
}



export const getMultipledata=async (path)=>{
    try {
        await listAll(ref(Storage,path))
    } catch (error) {
        console.log(error);
    }
}


export const getFixedNumberData=async (path,Number)=>{
    try {
        await list(ref(Storage,path),{ maxResults: Number })
    } catch (error) {
        console.log(error);
    }
}