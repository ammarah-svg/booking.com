import {User} from '../models/userModel'




export const getData = async()=>{

     const myUsers = await User.find();
     console.log(myUsers)
    return myUsers;
}