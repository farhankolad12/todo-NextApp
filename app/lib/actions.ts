"use server";

import { prevStateRegister } from "./definations";
import { Users } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const register = async (
  prevState: prevStateRegister,
  formData: FormData
) => {
  const { email, password, confirmPassword } = Object.fromEntries(formData);

  if (password != confirmPassword) {
    return { error: "Password don't match!" };
  }

  try {
    await connectToDb();

    const user = await Users.findOne({ email });

    if (user) {
      return { error: "Email already exists" };
    }

    const hashedPassword = await bcrypt.hash(password.toString(), 10);

    const newUser = new Users({
      email,
      password: hashedPassword,
      createdAt: Date.now(),
    });

    await newUser.save();

    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
