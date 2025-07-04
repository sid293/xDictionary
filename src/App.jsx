import { useState } from 'react'
import './App.css'

function App() {
  const [definition, setDefinition] = useState("");
  const [search, setSearch] = useState("");
  const [dictionary, setDictionary] = useState(
    [

      { word: "React", meaning: "A JavaScript library for building user interfaces." },

      { word: "Component", meaning: "A reusable building block in React." },

      { word: "State", meaning: "An object that stores data for a component." }

    ]
  )

  function handleSubmit(){
    let found = false;
    for(let i=0;i<dictionary.length;i++){
      // console.log("comparing: ",search.toLowerCase(), dictionary[i]["word"].toLowerCase())
      if(search.toLowerCase() === dictionary[i]["word"].toLowerCase()){
        // console.log("yes")
        setDefinition(dictionary[i]["meaning"])
        found = true;
      }
    }
    if(!found){
      setDefinition("Word not found in the dictionary.")
    }
  }

  return (
    <>
      <div>
        <h2>Dictionary App</h2>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" />
        <button onClick={
          handleSubmit
        }>Submit</button>
        <h3>Definition: </h3><p>{definition}</p>
      </div>
   </>
  )
}

export default App
