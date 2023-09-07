import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`Db connection faile ${error}`);
  }
};
