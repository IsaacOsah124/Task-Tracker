import mongoose from "mongoose";

export const connectToDatabase = async () => {
    try{
       const connection = await mongoose.connect(
        "mongodb+srv://omkhetwal:qfxoQkUzbzQWaoMo@youtube.lothdki.mongodb.net/blossom-app?retryWrites=true&w=majority"
       )
       if (connection) {
        console.log("Connection established")
      }
    } catch(error){
        console.log('error in Name', error)
        throw (error)
    }
}

export default connectToDatabase