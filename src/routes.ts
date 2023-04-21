import { Router } from "express";
import {BookController} from "./controllers/bookController";
import { PrismaRepository } from "./repositories/prismaRepository";

const repository = new PrismaRepository();

const bookController = new BookController(repository);

const router = Router();

router.get("/books", async (req, res) => await bookController.listBooks(req, res) ) 

router.get("/books/:id", async (req, res) => await bookController.findBookById(req, res) )

export { router, bookController }
