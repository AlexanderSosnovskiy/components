import React from 'react'

import './Book.css'
import './common/base.css'

function Book({ book }) {
  const addToCartHandler = e => {
    const childrenArray = Array.from(e.target.parentNode.childNodes)

    childrenArray.map(item => console.log(item))
  }

  return (
    <article className='book'>
      <img className='book-cover' src={book.img.url} alt={book.img.alt} />
      <h4 className='book-title'>{book.title}</h4>
      <h4 className='book-author'>{book.author}</h4>
      <p>{book.type}</p>
      <p>{book.price}</p>
      <button type='button' className='main-button' onClick={addToCartHandler}>
        add to cart
      </button>
    </article>
  )
}

export default Book
