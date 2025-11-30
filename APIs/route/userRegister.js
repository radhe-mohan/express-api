import { Router } from "express";
import { body } from "express-validator";

import { userLogin, userProfile, userRegister } from "../controller/userRegister.js";
import { singleUpload, singleUpload_s3 } from "../../middleware/multer.js";

const router = Router();
router.post("/register", singleUpload_s3("uploads/users/", "image"), [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('age').isInt({ min: 0 }).withMessage('Valid age is required'),
    body('phoneNumber').notEmpty().withMessage('Phone number is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], userRegister);
router.post("/login", [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
], userLogin);
router.get("/profile/:userId", userProfile)
export default router;