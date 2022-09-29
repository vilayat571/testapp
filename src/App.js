import React from 'react'
import { useSelector } from 'react-redux';
import Cards from './components/Cards'

function App() {
  const score = useSelector(state => state.cardReducer.score);
  return (
    <div>
      <Cards />
      {
        score
      }
    </div>
  )
}

export default App
