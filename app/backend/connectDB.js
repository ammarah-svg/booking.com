import mongoose from 'mongoose';
 


export const connect = async()=>{

await mongoose.connect('mongodb+srv://ammarisvg:zxt46cldq79kNkPo@cluster0.6q1gmzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
console.log(`Database connected on Host: ${mongoose.connection.host}`)

}
