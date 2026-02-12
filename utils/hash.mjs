import bcrypt from "bcrypt"

export const hash = (password) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds)
    return hashedPassword;
}

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
}