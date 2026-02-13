import { Router } from "express";
import { createClass } from "../controller/class.contoller.mjs";
import { authorize } from "../middlewares/authorize.middleware.mjs";

const router = Router();

router.post('/create' ,createClass);

export default router;