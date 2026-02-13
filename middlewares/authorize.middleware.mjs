import jwt from "jsonwebtoken";


export const authorize = (...role) => {
    return (req, res, next) => {
        try {
            const token = req.headers.Authorization;

            //change the conditon when extend it to full stack
            if (!token) {
                return res.status(400).json({ message: "Access Denied" })
            };

            const decoded = jwt.verify(token, process.env.SECRET);

            if (role != decoded.roles)
                return res.status(401).json({ message: "Unauthorized" });

            next();
        }
        catch (e) {
            console.log(`An error occured inside the authorize middleware ${e}`);
            return res.status(500).json({message : "An error occured !"});
        }
    }
}