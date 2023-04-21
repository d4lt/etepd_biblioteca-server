import {Request, Response} from  'express'
import { z } from 'zod'
import { BookRepository } from '../repositories/Repositories'



export class BookController {

    constructor(private bookRepository: BookRepository) {}



    async listBooks(request:Request, response: Response) {
        const books = await this.bookRepository.findMany()    

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

    async findByTitle(request: Request, response: Response) {
        const findByTitleParams = z.object({
            title: z.string()
        })

        const { title } = findByTitleParams.parse( request )

        const books = await this.bookRepository.findBookByTitle( title )

        return response.json(books)
    }

}

