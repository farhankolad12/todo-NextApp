import mongoose, { ConnectionStates } from "mongoose";

const connection: { isConnected: ConnectionStates | undefined } = {
  isConnected: undefined,
};

export async function connectToDb() {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URL || "");
    connection.isConnected = db.connections[0].readyState;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
