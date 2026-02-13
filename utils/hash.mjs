import bcrypt from "bcrypt"

export const hash = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword;
    } catch (err) {
        console.log("An error occured : ", err);
    }
}

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}