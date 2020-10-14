import React from 'react'
import Book from './Book'
import { books } from '../assets/data/books'

function BookList() {
  return (
    <section className='book-list'>
      <h1 className='book-list-title'>Best Sellers in Books</h1>
      {books.map((book, index) => {
        return <Book key={index} book={book} />
      })}
    </section>
  )
}

export default BookList
