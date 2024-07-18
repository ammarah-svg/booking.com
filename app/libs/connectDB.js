import mongoose from 'mongoose';
 


export const connect = async()=>{

await mongoose.connect('mongodb+srv://ammarisvg:hello123@cluster0.jfqcico.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
console.log(`Database connected on host: ${mongoose.connection.host}`)

}
