import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../services/characters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');

  useEffect(() => {
    //fetchCharacters page-load
    const fetchData = async () => {
      const data = await fetchCharacters(`${race}`, '');
      setCharacters(data);
      console.log('character data', data);
    };
    fetchData();
  }, [race]);

  console.log({ characters });
  console.log(characters);

  return (
    <>
      <h4>Characters</h4>
      <select onChange={(e) => setRace(e.target.value)}>
        <option value="All">All</option>
        <option value="Dwarf">Dwarf</option>
        <option value="Elf">Elf</option>
        <option value="Hobbit">Hobbit</option>
        <option value="Human">Human</option>
        <option value="Maiar">Maiar</option>
        <option value="Orc">Orc</option>
      </select>
      <div>
        {characters.map((character) => (
          <h4 key={character.name}>{character.name}</h4>
        ))}{' '}
      </div>
    </>
  );
}
