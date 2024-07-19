"use server";

// import { permanentRedirect } from 'next/navigation';
// import { revalidatePath } from "next/cache";
import { User } from "./models/userModel";
import bcrypt from 'bcrypt';
import { connect } from './connectDB'

export const addUser = async (formData) => {
  const { name, email, password } = Object.fromEntries(formData);


  await connect();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const createdUser = await User.create({ name, email, password: hashed });
       if(createdUser) {
        console.log('user created successfully')
       }
}



export const authenticate = async (formData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
      await signIn("credentials",{email,password})
  } catch (error) {
      throw new Error('Invalid Credentials')
  }
}


