import { Request , Response } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma'



export class LoginController {

    async login(request: Request, response: Response) {
        return response.json('Hello world ')
    }

    async createUser(request: Request, response: Response) {
        
    }
}