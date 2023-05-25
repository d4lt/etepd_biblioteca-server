import { BookPrismaRepository } from "./bookPrisma";
import { UserPrismaRepository } from "./userPrisma";

export class PrismaRepository {

    book: BookPrismaRepository
    user: UserPrismaRepository

    constructor() {
        this.book = new BookPrismaRepository()
        this.user = new UserPrismaRepository()
    } 
} 
