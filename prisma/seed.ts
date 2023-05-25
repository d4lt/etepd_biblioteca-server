import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

const user1 = {
    id: '7530c290-5212-4b6c-823b-77bed4d5afc1', 
    name: 'Alice',
}

const user2 = {
    id: 'e418abb8-6932-424f-8188-5b01ff22f381',
    name: 'Bob',
}

const user3 = {
    id: 'f32c9f48-ad97-4b8e-b44a-03a21b9a6f3d',
    name: 'Joe',
}

const book1 = { 
    id: '405b820c-86fd-4f66-b8f7-76f8125b0710',
    title: 'The Art of War',
    author: 'Sun Tzu',
    isbn: '9781599869773'
}

const book2 = { 
    id: 'c4eaaffb-a755-4f45-8f42-d4e57c69cfe1',
    title: "1984",
    author: 'George Orwell',
    isbn: '9791280035356'
}

const book3 = { 
    id: 'a5e081b1-d1c7-4ce3-8f26-70baa3beb493',
    title: "Hamlet",
    author: 'Shakespeare',
    isbn: '9780743477123'

}



async function run(){

    await prisma.book.deleteMany()
    await prisma.user.deleteMany()

    await Promise.all([

        prisma.book.create({
            data: {
                ...book1
            }
        }),

        prisma.book.create({
            data: {
                ...book2
            }
        }),

        prisma.book.create({
            data: {
                ...book3
            }
        })

    ])

    await Promise.all([

        prisma.user.create({
            data: {
                ...user1
            }
        }),

        prisma.user.create({
            data: {
                ...user2
            }
        }),

        prisma.user.create({
            data: {
                ...user3
            }
        })

    ])

}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }); 
