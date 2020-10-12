import React from 'react'

import './book.css'

function Book(props) {
  return (
    <article className='book-card'>
      <img
        className='book-card-cover'
        src={props.book.img.url}
        alt={props.book.img.alt}
      />
      <h4 className='book-card-title'>{props.book.title}</h4>
      <h4>{props.book.author}</h4>
      <p>{props.book.type}</p>
      <p>{props.book.price}</p>
    </article>
  )
}

export default Book
