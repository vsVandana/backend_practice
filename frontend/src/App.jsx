import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
  setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })
  return (
    <>
      <h1>welcome to a full stack application</h1>
      <p>JOKES : {jokes.length}</p>
      
      <ul>{
        jokes.map((joke)=>(
        <li key={joke.id}>
          <h6>{joke.question}</h6>
          <h6>{joke.answer}</h6>
          </li>
        ))
      }</ul>
    </>
  )
}

export default App
