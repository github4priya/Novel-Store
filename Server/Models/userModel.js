import mongoose from 'mongoose';
import bcrypt from 'bcrypt'


//user schema
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
    },
    {
        timeStamps: true,  // time when it is been created
    }
)


//encrypting the password
userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
    {
        next();
    }
    else
    {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
    }
})


//check if password is matching or not while logging in
userSchema.methods.matchPassword = async function(enteredPassword){
    console.log(this.password);
    return await bcrypt.compare(enteredPassword, this.password)
}


//create model from schema
const User = mongoose.model("User", userSchema);

export default User;