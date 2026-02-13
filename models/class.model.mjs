import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true  
    },

    role: {
      type: String,
      enum: ["staff", "student"],
      required: true,
      index: true
    },

    joinedAt: {
      type: Date,
      default: Date.now
    }
  },
  { _id: false }
);

const classSchema = new mongoose.Schema(
  {
    className: {
      type: String,
      required: true,
      unique: true,  
      trim: true
    },
    CA : {
      type : mongoose.Schema.Types.ObjectId,
      required : true
    },
    members: {
      type: [memberSchema],
      default: []
    },

    isActive: {
      type: Boolean,
      default: true
    }

  },
  {
    timestamps: true
  }
);  

export const Class = mongoose.model("Class", classSchema);