import { User } from "../models/user.model.mjs";
import { hash } from "../utils/hash.mjs";

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashed = await hash(password)
        const newUser = await User.create({
            name: name,
            email: email,
            password: hashed,
            role: role
        });
        return res.status(201).json({user : newUser});
    } catch(e) {
        console.log(e);
        return res.status(500).json({message : "An error occured"})
    }
}

export const login = async (req, res) => {
    return res.status(200).json({
        message : "Login Successfully"
    })
}