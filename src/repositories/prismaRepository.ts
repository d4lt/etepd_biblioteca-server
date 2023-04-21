import { BookRepository, StudentRepository } from "./Repositories";
import { prisma } from "../lib/prisma"
import { Book as RawBook} from "@prisma/client";
import { Book } from "../entities/bookEntity";

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

    async findBookById(id: string): Promise<Book | null> {
        const prismaRaw = await prisma.book.findUnique({
            where: {
                id: id
            }
        })

        if(!prismaRaw) return null

        const book = toBook(prismaRaw)

        return book
    }

    async findBookByIsbn(isbn: string): Promise<Book | null> {
        const prismaRaw = await prisma.book.findUnique({

            where: {
                isbn: isbn
            }
        }) 
        
        if (!prismaRaw){
            return null
        }

        const book = toBook(prismaRaw) 

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
