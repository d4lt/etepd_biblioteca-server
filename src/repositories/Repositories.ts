import { Book } from "../entities/Book/bookEntity"
import { User } from '../entities/User/UserEntity'

export interface BookRepository {
    findMany(): Promise<Book[]>
    findBookById(id: string): Promise<Book | null>
    findBookByIsbn(isbn: string): Promise<Book | null>
    findBookByTitle(title: string): Promise<Book[]>
    
    createBook(title: string, author: string, isbn: string): Promise<Book>
}

export interface UserRepository {
    findMany(): Promise<User[]>
    findUserById(id: string): Promise<User | null>
    createUser(name: string): Promise<User>
}
