import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

const user1 = {
    id: randomUUID(),
    name: 'Alice',
}

const user2 = {
    id: randomUUID(),
    name: 'Bob',
}

const user3 = {
    id: randomUUID(),
    name: 'Joe',
}

const book1 = { 
    id: randomUUID(),
    title: 'The Art of War',
    author: 'Sun Tzu',
    isbn: '9781599869773'
}

const book2 = { 
    id: randomUUID(),
    title: "1984",
    author: 'George Orwell',
    isbn: '9791280035356'
}

const book3 = { 
    id: randomUUID(),
    title: "Hamlet",
    author: 'Shakespeare',
    isbn: '9780743477123'

}


async function populateUser() {


}

async function populateBook() {

    prisma.book.create({
        data: {
            ...book1
        }
    })

    prisma.book.create({
        data: {
            ...book2
        }
    })

    prisma.book.create({
        data: {
            ...book3
        }
    })

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
