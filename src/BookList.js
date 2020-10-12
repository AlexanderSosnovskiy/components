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

const ifAnimalsKissedGoodNight = {
  title: 'If Animals Kissed Good Night',
  author: 'Ann Whitford Paul',
  type: 'board book',
  price: '$4.79',
  img: {
    url:
      'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
    alt: 'If Animals Kissed Good Night',
  },
}

const littleBlueTruck = {
  title: `Little Blue Truck's Halloween`,
  author: 'Alice Schertle',
  type: 'board book',
  price: '$8.64',
  img: {
    url:
      'https:images-na.ssl-images-amazon.com/images/I/51qNkKlcbnL._AC_UL200_SR200,200_.jpg',
    alt: `Little Blue Truck's Halloween`,
  },
}

const llamaLovesCamping = {
  title: 'Llama Llama Loves Camping',
  author: 'Anna Dewdney',
  type: 'paperback',
  price: '$1.51',
  img: {
    url:
      'https:images-na.ssl-images-amazon.com/images/I/91M4Eew0juL._AC_UL200_SR200,200_.jpg',
    alt: 'Llama Llama Loves Camping',
  },
}

function BookList() {
  return (
    <section className='book-list'>
      <h1 className='book-list-title'>Best Sellers in Books</h1>
      <Book book={catchMermaid} />
      <Book book={wonkyDonkey} />
      <Book book={loveYouToMoonAndBack} />
      <Book book={ifAnimalsKissedGoodNight} />
      <Book book={littleBlueTruck} />
      <Book book={llamaLovesCamping} />
    </section>
  )
}

export default BookList
