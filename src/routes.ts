import { Router } from "express";
import {BookController} from "./controllers/bookController";
import { UserController } from "./controllers/userController";
import { PrismaRepository } from "./repositories/prismaRepository/prismaRepository";

const repository = new PrismaRepository()
const bookController = new BookController(repository.book);
const userController = new UserController(repository.user);

const router = Router();

router.get("/books", async (req, res) => await bookController.listBooks(req, res) ) 
router.get("/books/:id", async (req, res) => await bookController.findBookById(req, res) )
router.post("/books", async (req, res) => await bookController.createBook(req, res) )

router.get("/users", async (req, res) => await userController.listUsers(req, res))
router.get("/users/:id", async (req, res) => await userController.findUserById(req, res))

export { router }