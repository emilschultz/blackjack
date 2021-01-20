import React, { useState } from 'react';

function App() {

  // const [dealerHand, setDealerHand] = useState('');
  // const [playerHand, setPlayerHand] = useState('');
  const [responseData, setResponseData] = useState('');
    
  // SHUFFLE THE CARDS
  const handleShuffleCards = (event) => {
    event.preventDefault();
    
    let shuffleCards = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1' 
      fetch(shuffleCards)
        .then(response => {
          console.log(response.status)
          console.log(response.text)
          return response.json();
        })
        .then(data => {
          console.log(data)
          setResponseData(data)
        })
      }

    // DRAW A CARD
    const handleDrawCards = (event) => {
      event.preventDefault();

      let drawCards = 'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
          fetch(drawCards)
            .then(response => {
              console.log(response.status)
              console.log(response.text)
              return response.json();
            })
            .then(data => {
              console.log(data)
              setResponseData(data)
            })
    }


  




  return (
    <>
      <h1>Let's play blackjack!</h1>
      <button type="submit" onClick={event => handleShuffleCards(event)}>Shuffle the cards / restart?</button>
      <button type="submit" onClick={event => handleDrawCards(event)}>Hit me</button>
    </>
  )
};

export default App;