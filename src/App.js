import React, { useState } from 'react';

function App() {

  const [cardDeck, setCardDeck] = useState('');
  // const [dealerHand, setDealerHand] = useState('');
  // const [playerHand, setPlayerHand] = useState('');
  const [responseData, setResponseData] = useState('');

  const handeClick = (event) => {
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


  return (
    <>
      <h1>Let's play blackjack!</h1>
      <button type="submit" onClick={event => handeClick(event)}>Hit me</button>
    </>
  )
};

export default App;