import express from "express";
import {
    google,
    signin,
    signup,
    microsoft,
    github,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

// OAuth routes
router.post("/google", google);
router.post("/microsoft", microsoft);
router.post("/github", github);

export default router;
