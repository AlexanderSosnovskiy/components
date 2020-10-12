import React from 'react'

function Book(props) {
  return (
    <article>
      <img src={props.book.img.url} alt={props.book.img.alt} />
      <h1>{props.book.title}</h1>
      <h4>{props.book.author}</h4>
      <p>{props.book.type}</p>
      <p>{props.book.price}</p>
    </article>
  )
}

export default Book
