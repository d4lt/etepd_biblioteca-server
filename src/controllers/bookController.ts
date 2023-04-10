
import {Request, Response} from  'express'
import { z } from 'zod'
import { BookRepository } from '../repositories/IRepositories'



class BookController {
    constructor(private bookRepository: BookRepository) {}

    async listBooks(request:Request, response: Response){
        const books = await this.bookRepository.findMany()    
        
        return response.json(books)
    }
    
}

export { BookController }
