import { Router } from "express";
import { LoginController } from "./controllers/loginController";

const loginController = new LoginController();

const router = Router();

router.get("/users", loginController.login)

export { router }