import { Book } from "../entities/bookEntity"

export interface BookRepository {
    findMany(): Promise<Book[]>
    findBookByIsbn(isbn: string): Promise<Book | null>
    findBookByTitle(title:string): Promise<Book | null>
}

export interface StudentRepository {}
