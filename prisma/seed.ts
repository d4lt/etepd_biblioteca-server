import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface bookFields {
    id: string;
    title: string;
    author: string;
    isbn: string;

}

const book1: bookFields = { 
    id: '13cddfcd-7108-4068-8d84-34855f6179a7',
    title: 'The Art of War',
    author: 'Sun Tzu',
    isbn: '1234'
}

const book2: bookFields = { 
    id: 'a22c29da-e15f-41a8-bd4f-1055c08f5de7',
    title: "1984",
    author: 'George Orwell',
    isbn: '4201'
}

const book3: bookFields = { 
    id: '0d21263a-de29-4d91-bbd8-c93cf92c7266',
    title: "Hamlet",
    author: 'Shakespeare',
    isbn: '8923'

}

const books = [book1, book2, book3]

async function run(){

    await prisma.book.deleteMany()

    books.forEach( async (book) => {
        await prisma.book.create({
            data: {
                id: book.id,
                title: book.title,
                author: book.author,
                isbn: book.isbn
            }
        })
    })
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
