import express from "express";
import { register, login, logout } from "../models/auth.js";

const router = express.Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });
  
router.use(express.json());
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;

