import React from 'react'

import './book.css'

function Book(props) {
  const { book } = props

  return (
    <article className='book'>
      <img className='book-cover' src={book.img.url} alt={book.img.alt} />
      <h4 className='book-title'>{book.title}</h4>
      <h4 className='book-author'>{book.author}</h4>
      <p>{book.type}</p>
      <p>{book.price}</p>
    </article>
  )
}

export default Book
