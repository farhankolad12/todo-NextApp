"use server";

import { signIn } from "@/app/lib/auth";
import { prevStateRegister } from "./definations";
import { Users } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

export async function login(prevState: prevStateRegister, formData: FormData) {
  prevState = undefined;
  const { email, password } = Object.fromEntries(formData);

  if (email == "" || password == "")
    return { error: "email/password is required" };

  try {
    await signIn("credentials", formData);
    return { success: true };
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
}

export async function register(
  prevState: prevStateRegister,
  formData: FormData
) {
  prevState = undefined;
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

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
}
