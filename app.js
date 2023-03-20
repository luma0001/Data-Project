window.addEventListener("load", initApp);

function initApp() {
  createPokemon(
    image,
    pokemonName,
    generation,
    pokemonElement,
    pokemonType,
    evolutonCap,
    evolutionLvl,
    pokemonHeigt,
    pokemonWeight,
    apperances
  );
}

function createPokemon() {
  const html = `
<tr>
<td>${image}</td>
<td>${pokemonName}</td>
<td>${generation}</td>
<td>${pokemonElement}</td>
<td>${pokemonType}</td>
<td>${evolutonCap}</td>
<td>${evolutionLvl}</td>
<td>${pokemonHeigt}</td>
<td>${pokemonWeight}</td>
<td>${apperances}</td>
</tr>
`;
}

function createList(apperances) {
  const newList = apperances.split();
  // loop on each element and add it into its own li-element, will need an ul too
}
