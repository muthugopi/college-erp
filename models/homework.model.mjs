import mongoose, { Types } from "mongoose";

const homeworkSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true,
        trim : true
    },
    class : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Class",
        required : true,
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    dueDate : {
        type : Date,
        required : true,
    },
    status : {
        type : String,
        enum : ["active", "closed"]
    }
}, 
{
    timestamps : true
}
);

export const Homeword = mongoose.model("Homework", homeworkSchema);