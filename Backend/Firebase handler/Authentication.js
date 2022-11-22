import { createUserWithEmailAndPassword, deleteUser, signInWithPopup, updateEmail, updatePassword } from "firebase/auth";
import { Auth } from "../firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider()

export const createNewUser= async (Email,Password)=>{
    try {
       return   (await createUserWithEmailAndPassword(Auth,Email,Password)).user.uid
    } catch (error) {
        console.log(error)
    }
}


export const CreateNewUserWithGoogle=()=>{
    try {
        signInWithPopup(Auth,GoogleProvider)
    } catch (error) {
        console.log(error);
    }
}


export const UpdatePassword=async (NewPassword)=>{
   try {
       await updatePassword(Auth.currentUser,NewPassword)
   } catch (error) {
    console.log(error)
   } 
}


export const UpdateEmail=async (NewEmail)=>{
   try {
       await updateEmail(Auth.currentUser,NewEmail);
   } catch (error) {
    console.log(error)
   } 
}


export const DeleteMyAccount=async ()=>{
    try {
        await deleteUser(Auth.currentUser);
    } catch (error) {
        console.log(error)
    }    

}
export const DeleteUser=async (id)=>{
    try {
        await deleteUser(id);
    } catch (error) {
        console.log(error)
    } 
}



