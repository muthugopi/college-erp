import { Router } from "express";
import { login, register } from "../controller/auth.contoller.mjs";
import passport from "passport";

const router = Router();

router.post('/register', register);
router.post('/login', passport.authenticate('local'), login)

export default router;