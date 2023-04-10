import { Router } from "express";
import {BookController} from "./controllers/bookController";
import { PrismaRepository } from "./repositories/prismaRepository";

const repository = new PrismaRepository();

const bookController = new BookController(repository);

const router = Router();

router.get("/home", bookController.listBooks)

export { router }
