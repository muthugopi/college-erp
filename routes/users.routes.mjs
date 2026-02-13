import { Router } from "express";
import { getAllUsrs } from "../controller/user.controller.mjs";

const router = Router();

router.get('/get', getAllUsrs);

export default router