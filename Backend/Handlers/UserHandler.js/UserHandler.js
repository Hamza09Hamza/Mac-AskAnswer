var Crypt=require("crypto-js");
import { DeleteData } from '../../Firebase handler/Storage';
import { createNewUser } from './../../Firebase handler/Authentication';
import { createFireStoreWithSpecificID, getDataFireStoreSpecDoc } from './../../Firebase handler/FireStore';

export const newUser=async (data)=>{
    let DataUserDisplay=data
    let cryptedPass =Crypt.AES.encrypt(JSON.stringify(data.Password), 'my-secret-key@123').toString();
    try {
        const ID= await createNewUser(data.Email,cryptedPass)
        await createFireStoreWithSpecificID(`Users/${ID}`,DataUserDisplay)
        localStorage.setItem("myInfo",JSON.stringify(DataUserDisplay));
    } catch (error) {
        console.log(error);
    }
}


export const getUserData=async (ID)=>{
    return await getDataFireStoreSpecDoc(`Users/${ID}`)
}


export const ADMINDeleteUser=async (ID)=>{
    await deleteFireStore(ID);
    await DeleteUser(ID);
    await DeleteData(`Profiles/${ID}`);
}
    

