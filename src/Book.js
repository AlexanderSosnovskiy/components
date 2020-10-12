import React from 'react'

import './book.css'

function Book(props) {
  return (
    <article className='book'>
      <img
        className='book-cover'
        src={props.book.img.url}
        alt={props.book.img.alt}
      />
      <h4 className='book-title'>{props.book.title}</h4>
      <h4 className='book-author'>{props.book.author}</h4>
      <p>{props.book.type}</p>
      <p>{props.book.price}</p>
    </article>
  )
}

export default Book
