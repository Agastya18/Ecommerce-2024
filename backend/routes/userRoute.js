import { Router } from "express";
import { getCurrentUser, getUserById, updateUserProfile, updateUserRole, userLogin, userLogout, userRegister } from "../Controllers/userController.js";
import { Admin, verifyUser } from "../middleware/authMiddleware.js";


const router = Router();


 router.route("/register").post(userRegister)
 router.route("/login").post(userLogin)
 router.route("/logout").post(verifyUser,userLogout)
 router.route("/me").get(verifyUser,getCurrentUser)
 router.route("/current-user").get(verifyUser,getCurrentUser)
 router.route("/update-user").put(verifyUser,updateUserProfile)
 router.route("/:id").get(verifyUser,getUserById)
 router.route("/:id").put(verifyUser,Admin,updateUserRole)
    
export default router;