import {test, expect} from 'vitest'
import { Book } from './bookEntity'


test('Book', ()=> {
    const book = new Book({
        title:'beyond good and evil',
        author: 'Kafka, Franz',
        isbn: '12334'
    })

    expect(book.title).toBe('Beyond Good And Evil')
})
