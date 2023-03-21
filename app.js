window.addEventListener("load", initApp);

function initApp() {
  const charImage =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F145648817%40N06%2F29130775290&psig=AOvVaw2HaC1U2UZuQ855jTq_lXlE&ust=1679491093531000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPC544OO7f0CFQAAAAAdAAAAABAD";
  const charName = "Charizard";
  const charGeneration = "First";
  const charElement = "Fire";
  const charType = "Flying";
  const charCap = 3;
  const charLvl = 3;
  const charHeight = "";
  const charWeigt = "";
  const charApperances = "";

  createPokemon(
    charImage,
    charName,
    charGeneration,
    charElement,
    charType,
    charCap,
    charLvl,
    charHeight,
    charWeigt,
    charApperances
  );

  // createPokemon(
  //   image,
  //   pokemonName,
  //   generation,
  //   pokemonElement,
  //   pokemonType,
  //   evolutonCap,
  //   evolutionLvl,
  //   pokemonHeigt,
  //   pokemonWeight,
  //   apperances
  // );
}

function createPokemon(
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
) {
  const html = /*html*/ `
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

  document.querySelector("#pokemonList").insertAdjacentHTML("beforeend", html);
}

function createList(apperances) {
  const newList = apperances.split();
  // loop on each element and add it into its own li-element, will need an ul too
}
