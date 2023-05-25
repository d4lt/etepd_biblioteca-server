import { UserRepository } from "../repositories/Repositories";
import { Response, Request } from "express";
import { z } from "zod";

export class UserController {
   
    constructor( private userRepository: UserRepository) {}

    async listUsers(request: Request, response: Response) {
        const users = await this.userRepository.findMany()

        return response.json(users)
    }

    async findUserById(request: Request, response: Response) {
        const findByIdParams = z.object({
            id: z.string().uuid()
        })

        const { id } = findByIdParams.parse( request.params )

        const user = this.userRepository.findUserById( id )

        if ( !user ) return response.send('The user was not found').status(404)
        
        return response.json(user )
    }
} 
