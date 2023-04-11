
import {Request, Response} from  'express'
import { z } from 'zod'
import { BookRepository } from '../repositories/Repositories'



class BookController {
    constructor(private bookRepository: BookRepository) {}

    async listBooks(request:Request, response: Response) {
        const books = await this.bookRepository.findMany()    

        return response.json(books)
    }

    async findByIsbn(request:Request, response: Response) {
        const getByIsbnParams = z.object({
            isbn: z.string().min(10).max(13)
        })

        const { isbn } = getByIsbnParams.parse( request )

        const book = this.bookRepository.findBookByIsbn(isbn)

        return response.json(book)
    }

    async findByTitle(request: Request, response: Response) {
        const findByTitleParams = z.object({
            title: z.string()
        })

        const { title } = findByTitleParams.parse( request )

        const books = this.bookRepository.findBookByTitle( title )

        return response.json(books)
    }

}

export { BookController }
