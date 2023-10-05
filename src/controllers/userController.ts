import { UserRepository } from "../repositories/Repositories";
import { Response, Request } from "express";
import { z } from "zod";

export class UserController {
   
    constructor( private userRepository: UserRepository)     {}

    async listUsers(request: Request, response: Response) {
        const users = await this.userRepository.findMany()

        return response.json(users)
    }

    async findUserById(request: Request, response: Response): Promise<Response> {
        const findByIdParams = z.object({
            id: z.string().uuid()
        })

        const { id } = findByIdParams.parse( request.params )

        const user = await this.userRepository.findUserById( id )

        if ( !user ) return response.send('The user was not found').status(404)
        
        return response.json( user )
    }
    
    async createUser(request: Request, response: Response): Promise<Response> {
        const UserParams = z.object({
            name: z.string().min(1).max(30),
        })

        const { name } = UserParams.parse(request.body)

        const user = await this.userRepository.createUser(name)

        return response.json(user)
    }

} 