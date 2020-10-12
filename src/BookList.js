import React from 'react'
import Book from './Book'

const catchMermaid = {
  title: 'How to catch a Mermaid',
  author: 'Adam Wallace',
  type: 'hardcover',
  price: '$2.54',
  img: {
    url:
      'https://images-na.ssl-images-amazon.com/images/I/81Zj4ibm%2BhL._AC_UL200_SR200,200_.jpg',
    alt: 'How to catch a Mermaid',
  },
}

const wonkyDonkey = {
  title: 'The Wonky Donkey',
  author: 'Craig Smith',
  type: 'handcover',
  price: '$1.82',
  img: {
    url:
      'https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg',
    alt: 'The Wonky Donkey',
  },
}

const loveYouToMoonAndBack = {
  title: 'I Love you to the Moon and back',
  author: 'Amelia Hepworth',
  type: 'handcover',
  price: '$0.99',
  img: {
    url:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    alt: 'I Love you to the Moon and back',
  },
}

function BookList() {
  return (
    <section className='book-list'>
      <h1 className='book-list-title'>Best Sellers in Books</h1>
      <Book book={catchMermaid} />
      <Book book={wonkyDonkey} />
      <Book book={loveYouToMoonAndBack} />
    </section>
  )
}

export default BookList
