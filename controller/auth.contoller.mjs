import jwt from 'jsonwebtoken'

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
        console.log(`${role} : ${name} created successfully`);
        return res.status(201).json({user : newUser});
    } catch(e) {
        console.log(e);
        return res.status(500).json({message : "An error occured"})
    }
}

export const login = async (req, res) => {
    const user = req.user;
    const token = jwt.sign(
        {id : user._id, email : user.email},
        process.env.SECRET,
        {expiresIn : "1h"}
    )
    return res.status(200).json({
        message : "Login Successfully",
        token : token
    })
}