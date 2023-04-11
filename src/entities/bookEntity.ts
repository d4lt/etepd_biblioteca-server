import { randomUUID } from 'crypto'
import { parse as parseISBN3 } from 'isbn3'

interface BookProps {
    id?: string
    title: string
    author: string
    isbn: string
}


function capitalizeFirstLetter(str: string) {

    str = str.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    return str
}


export class Book {
    private props: BookProps

    constructor(props: BookProps) {

        const sourceIsbn = parseISBN3( props.isbn ) 
        let validIsbn = ""
        
        if (sourceIsbn?.isValid){
            validIsbn = sourceIsbn?.source
        } else {
            throw new Error("Invalid ISBN Code")
        }
        
        this.props = {
            ...props,

            id: props.id ?? randomUUID(),
            title: capitalizeFirstLetter(props.title),
            isbn: validIsbn 
        }   
    }

    public get id() {
        return this.props.id
    }

    public get title() {
        return this.props.title
    }

    public set title(title: string) {

        title = capitalizeFirstLetter(title)
        this.props.title = title
    }

    public get author() {
        return this.props.author
    }

    public set author(author: string) {
        this.props.author = author
    }

    public get isbn() {
        

        return this.props.isbn
    }

    public set isbn(isbn: string) {
        this.props.isbn = isbn
    }

}
