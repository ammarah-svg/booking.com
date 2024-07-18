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
 
}

