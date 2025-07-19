import { useEffect, useState } from 'react'
import { getPokemons } from './services/PokemonService'
import type { Pokemon } from '../src/types/Pokemon'
import { PokemonCard } from './components/PokemonCard'
import './css/main.css'



function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [team, setTeam] = useState<Pokemon[]>([])

  useEffect(() => {
    getPokemons().then(setPokemons)
  }, [])

  const addToTeam = (pokemon: Pokemon) => {
    if(team.length < 6 && !team.find(p => p.name === pokemon.name)) {
      setTeam([...team, pokemon])
    }
  }


  return (
    <div className=' bg-neutral-800 text-yellow-200 p-4'>
      <h1 className='text-center'>Escoge tu equipo Pokemon</h1>
      <h2 className='text-center'>Equipo Actual ({team.length}/6):</h2>
      <ul className=''>
        {team.map((p) => (
          <li key={p.name}> {p.name}</li>
        ))}
      </ul>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center'>
        {pokemons.map((pokemon) => (
          <PokemonCard 
          key={pokemon.name} 
          pokemon={pokemon} 
          onAdd={addToTeam} 
          />
        ))}
      </div>
    </div>
  )
}

export default App
 