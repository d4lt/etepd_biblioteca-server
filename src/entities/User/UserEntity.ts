import { randomUUID } from 'crypto'
import dayjs from 'dayjs'

interface UserProps {
   id?: string 
   name: string
   createdAt?: Date  
}

export class User {
   private props: UserProps

   constructor(props: UserProps) {     
       this.props = {
           id: props.id ?? randomUUID(),
           createdAt: props.createdAt ?? dayjs().toDate(),
           ...props
       }
   }

   public get id() {
       return this.props.id
   }

   public get name() {
       return this.props.name
   }

   public set name( name ) {
       this.props.name = name
   }

   public get created_at() {
       return this.props.createdAt
   }

}
