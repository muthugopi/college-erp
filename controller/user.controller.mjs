import { getAllUsrsServices } from "../services/users.services.mjs";

export const getAllUsrs = async  (req, res) => {
    const users = await getAllUsrsServices();
    return res.status(200).json({users});
}