import { randomUUID } from 'crypto'

interface BookProps {
   id?: string
   title: string
   author: string
   isbn: string
}


function capitalizeFirstLetter(str: string) {

    str =  str.split(" ")
    .map( (word) => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(" ")
    
    return str
}


export class Book {
    private props: BookProps

    constructor( props: BookProps ){
        this.props = {
            ...props,
            id: props.id ?? randomUUID(),
            title: capitalizeFirstLetter(props.title)
        }
    }

    public get id() {
        return this.props.id
    }

    public get title() {
        return this.props.title
    }

    public set title( title:string ) {
        
        title = capitalizeFirstLetter(title) 
        this.props.title = title
    }
    
    public get author(){
        return this.props.author
    }

    public set author( author:string ){
        this.props.author = author
    }

    public get isbn(){
        return this.props.isbn
    }

    public set isbn(isbn: string){
        this.props.isbn = isbn
    }

}
