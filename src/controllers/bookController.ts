import {Request, Response} from  'express'
import { z } from 'zod'
import { BookRepository } from '../repositories/Repositories'


export class BookController {

    constructor(private bookRepository: BookRepository) {}

    async listBooks(request:Request, response: Response) {
        const titleFilter = request.query.title


        // if (typeof titleFilter === 'string') console.log(titleFilter)
        const books = typeof titleFilter === 'string' ? await this.bookRepository.findBookByTitle(titleFilter)
            : await this.bookRepository.findMany();     

        console.log(books)

        return response.json(books)
    }

    async findBookById(request:Request, response: Response) {
        const findByIdParams = z.object({
            id: z.string().uuid()
        })

        const { id } = findByIdParams.parse( request.params )

        const book = await this.bookRepository.findBookById( id )

        if (!book) return response.send('The book was not found.').status(404)
        
        console.log('the book is', book)

        return response.json( book )
    }

    async findByIsbn(request:Request, response: Response) {
        const findByIsbnParams = z.object({
            isbn: z.string().min(10).max(13)
        })

        const { isbn } = findByIsbnParams.parse( request )

        const book = await this.bookRepository.findBookByIsbn(isbn)

        return response.json(book)
    }

    async createBook(request: Request, response: Response) {    
        const createBookParams = z.object({
            title: z.string().min(1).max(100),
            author: z.string().min(1).max(100),
            isbn: z.string().min(10).max(13) 
        })

        const { title, author, isbn } = createBookParams.parse( request.body )

        const book = await this.bookRepository.createBook( title, author, isbn )

        return response.json(book)

    }

}

