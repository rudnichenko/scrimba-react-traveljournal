import React from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'

export default function App() {
  let cards = data.map(card => (
    <Card
      key={card.id} 
      {...card}
    />
  ));
  console.log(data);
  return (
    <div className="App">
      <Nav />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}