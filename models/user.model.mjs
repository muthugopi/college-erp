import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["student", "staff", "admin", "moderator"],
        required : true
    }
}, {
    timestams : true
});

export const User = mongoose.model("User", userSchema);