import jwt_decode from 'jwt-decode'
import axios from 'axios'


export const createOrGetUser=async(response:any,addUser:any)=>{
    const decoded:{email:string,name:string,sub:string,picture:string}=jwt_decode(response.credential);
    const {name,sub,picture}=decoded;

    const user={
        _type:'user',
        username:name,
        image:picture,
        _id:sub
    }

    addUser(user);

    await axios.post('http://localhost:3000/api/auth',user);
}       