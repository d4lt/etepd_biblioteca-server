import { User } from "../../entities/User/UserEntity";
import { User as RawUser } from "@prisma/client";
import { UserRepository } from "../Repositories";
import { prisma } from "../../lib/prisma";

function toUser(prismaRaw: RawUser): User {
    
    const user = new User({
        id: prismaRaw.id,
        name: prismaRaw.name,
        createdAt: prismaRaw.created_at
    })

    return user
}

export class UserPrismaRepository implements UserRepository {

    async findMany(): Promise<User[]> {
        const prismaRaw = await prisma.user.findMany() 

        const users: User[] = prismaRaw.map( toUser ) 

        return users
    }

    async findUserById(id: string): Promise<User | null> {
       const prismaRaw = await prisma.user.findUnique({
           where: {
               id: id
           }

       }) 

       if (!prismaRaw) return null

       const user = toUser( prismaRaw )

       return user
    }
}
