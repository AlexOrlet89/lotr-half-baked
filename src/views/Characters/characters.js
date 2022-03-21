export default function Characters({ characters, setRace }) {
  console.log({ characters });
  console.log(characters);

  return (
    <>
      Characters
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
