import type { Pokemon } from "../types/Pokemon";

interface  props {
    pokemon:Pokemon 
    onAdd: (pokemon: Pokemon) => void;
}   

export const PokemonCard = ({ pokemon, onAdd }: props) => {
    const getIdFromUrl = (url: string) => {
        const parts = url.split('/').filter(Boolean);
        return parts[parts.length - 1];
    }

    const id = getIdFromUrl(pokemon.url);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return(
        <div className="flex flex-col items-center bg-neutral-700 p-4 rounded-lg shadow-lg">
            <span className="text-sm text-yellow-300 italic font-bold ">#{id}</span>
            <img src={imageUrl} alt={pokemon.name} className="" />
            <h3>{pokemon.name}</h3>
            <button onClick={() => onAdd(pokemon)}>Add to Team</button>

        </div>
    )
}