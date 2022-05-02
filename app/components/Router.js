import api from "../helpers/rick_api.js";
import { ajax } from "../helpers/ajax.js";
import { Card } from "./Card.js";
import { Character } from "./Character.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  const d = document;
  const w = window;
  const $main = d.getElementById("main");
  let { hash } = location;
  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    // $post.innerHTML = `<h2>Sección del Home.</h2>`;
    await ajax({
      url: api.CHARACTER,
      cbSuccess: (character) => {
        // console.log(character.results);
        let html = "";
        character.results.forEach((char) => (html += Card(char)));
        document.querySelector(".loader").style.display = "none";
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    // $main.innerHTML = `<h2>Sección del buscador.</h2>`;
    let query = localStorage.getItem("characterToSearch");

    if (!query){
      d.querySelector('.loader').style.display = 'none';
      return false;
    }

    await ajax({
      url: `${api.SEARCHCHARACTER}${query}`,
      cbSuccess: (search) => {
        // console.log("routeSearch: ",search)
        let html = "";
        // console.log(search);
        if (search.results.length === 0) {
          html = `
            <p class="error">
              There is not result for this word <mark>${query}</mark>.
            </p>
          `;
        } else {
          search.results.forEach((search) => (html += SearchCard(search)));
          document.querySelector(".loader").style.display = "none";
        }
        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/contact") {
    // $main.innerHTML = `<h2>Sección del contacto.</h2>`;
    $main.appendChild(ContactForm());

  } else {

    let idSelected = localStorage.getItem("card-id");
    // console.log(idSelected)

    $main.innerHTML = `<h2>Aquí carga contenido del card seleccionado</h2>`;
    // console.log(`${api.CHARACTER}/${idSelected}`);
    await ajax({
      url: `${api.CHARACTER}/${idSelected}`,
      cbSuccess: (character) => {
        // console.log(character)
        $main.innerHTML = Character(character);
      },
    });
  }
  document.querySelector(".loader").style.display = "none";
}
