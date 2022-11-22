import { RTDatabase } from "../firebaseConfig";
import { ref, set,get ,remove} from "firebase/database";

export const gettingDataRT=async (Path)=>{
    try {
        await get(ref(RTDatabase,Path))
    } catch (error) {
        console.log(error);
    }
}


export const DelettingDataRT=async (Path)=>{
    try {
        await remove(ref(RTDatabase,Path))
    } catch (error) {
        console.log(error);
    }
}

export const addingOrUpdatingDataRT=async (Path)=>{
    try {
        await set(ref(RTDatabase,Path))
    } catch (error) {
        console.log(error);
    }
}