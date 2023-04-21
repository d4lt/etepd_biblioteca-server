import { Book } from "../entities/bookEntity"

export interface BookRepository {
    findMany(): Promise<Book[]>
    findBookById(id: string): Promise<Book | null>
    findBookByIsbn(isbn: string): Promise<Book | null>
    findBookByTitle(title: string): Promise<Book[]>
}

export interface StudentRepository { }
