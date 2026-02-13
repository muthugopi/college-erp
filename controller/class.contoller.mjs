import { createClassService } from "../services/class.services.mjs";

export const createClass = async (req, res) => {
   try  {
    const classData = req.body;

    const newClass = await createClassService(classData);

    return res.status(201).json({message : `New Class : ${newClass.className} created successfully`})
   } catch(err) {
    console.log(`An error occured : ${err}`);
    return res.status(500).json({message : "Internel Server Error"})
   }
}