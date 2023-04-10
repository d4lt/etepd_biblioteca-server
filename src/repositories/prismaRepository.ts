import { BookRepository, StudentRepository } from "./Repositories";
import { prisma } from "../lib/prisma"
import { Book as RawBook} from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime"; 
import { Book } from "../entities/bookEntity";
import { warn } from "console";

function toBook(prismaRaw: RawBook): Book {

    const book = new Book({
        id: prismaRaw.id,
        title: prismaRaw.title,
        author: prismaRaw.author,
        isbn: prismaRaw.isbn
    })

    return book
}

export class PrismaRepository implements BookRepository {
    async findMany(): Promise<Book[]> {
        const prismaRaw = await prisma.book.findMany()

        const books: Book[] = prismaRaw.map( toBook )

        return books
    }

    async findBookByIsbn(isbn: string): Promise<Book | null> {
        try {
            const prismaRaw = await prisma.book.findUniqueOrThrow({
                where: {
                    isbn: isbn
                }
            }) 
            
            const book = toBook(prismaRaw) 
        } catch(e) {
            
            if ( e instanceof PrismaClientKnownRequestError ){
                
            }
        }
        return book 
    }

    async findBookByTitle(title: string): Promise<Book[]> {
        const prismaRaw = await prisma.book.findMany({
            where:{
                title: title
            }
        }) 

        const booksByTitle: Book[] = prismaRaw.map( toBook )

        return booksByTitle
    }
}
