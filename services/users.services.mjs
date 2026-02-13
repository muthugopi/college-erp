import { User } from "../models/user.model.mjs";

export const getAllUsrsServices = async () => {
    const data = await User.find({}, {password : 0, __v : 0});
    return data;
}