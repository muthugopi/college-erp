import { Class } from "../models/class.model.mjs"

//change it when upgrade it into a full stack application
export const createClassService = async (classData) => {
    try {
        console.log(classData)
       const newClass = await Class.create(classData);
        return newClass;
    } catch(e) {
        console.log(`error while creating a class room : ${e}`);
    }
}

//update the sorting when upgrade into a full stack application
//under construction
// export const updateClassService = async (data) => {
//     const upgradedClass = await Class.updateOne({_id : data._id}, {data.key = data.newValue});
//     return res.status(201).json({
//         message : `${data.key} upgraded into ${data.newValue}`
//     })
// }