import {test, expect} from 'vitest'
import { Book } from './bookEntity'


test('Uppercase book title', () => {
    const book = new Book({
        title:'beyond good and evil',
        author: 'Kafka, Franz',
        isbn: '1933988037'
    })

    expect(book.title).toBe('Beyond Good And Evil')
})

test('ISBN Validation', () => {
    const book = new Book({
        title: 'the art of war',
        author: 'Sun Tzu',
        isbn: '978-4-87311-336-4'
    })

    expect(book.isbn).toBe('978-4-87311-336-4')
})
