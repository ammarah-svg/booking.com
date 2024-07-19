"use server";

import { User } from "./models/userModel";
import bcrypt from 'bcrypt';
import { connect } from './connectDB'
import { redirect } from "next/navigation";


//to sign up//

export const addUser = async (formData) => {
  const { name, email, password } = Object.fromEntries(formData);
  await connect();

  const isUserPresent = await User.findOne({ email })
  
  if (isUserPresent) {
      res.status(400);
      throw new Error('User already exists')
  } else{
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const createdUser = await User.create({ name, email, password: hashed });
       if(createdUser) {
        console.log('user created successfully')
      
       }}
       redirect('/')

};

//for sign in//

export const authenticate = async (email, password) => {
  await connect();
  const findUser =  User.findOne({ email });
  if (!findUser) {
    throw new Error("Invalid Email");
  } else {
    if (password == findUser.password) {
      console.log('login successful')
        } 
        else {
          throw new Error("Password does not match!");
        }
  }
  redirect('/')
    
}






