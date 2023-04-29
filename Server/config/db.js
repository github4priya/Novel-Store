import mongoose from 'mongoose';


//connecting with the database
const connectDB = async() =>{
    try {
        const conn = await mongoose.connect( process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        //connected
        console.log("connection successful")
    } catch (error) {
        //handle error while connection failed
        console.log(error);

    }
}

export default connectDB;