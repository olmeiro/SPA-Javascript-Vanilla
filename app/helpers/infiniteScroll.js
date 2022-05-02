import { SearchCard } from "../components/SearchCard.js";
import { Card } from "../components/Card.js";
import api from "./rick_api.js";
import { ajax } from "./ajax.js";

export async function InfiniteScroll() {
  const d = document;
  const w = window;

  let query = localStorage.getItem("characterToSearch");
  let apiUrl;
  let Component; //HOC

  //scroll
  w.addEventListener("scroll", async (e) => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement; //high width
    let { hash } = w.location;

    //console.log({scrollTop, clientHeight, scrollHeight, hash});

    if (scrollTop + clientHeight >= scrollHeight - 1) {
      //final page
      api.page++;

      if (!hash || hash === "#/") {
        apiUrl = `${api.CHARACTER}/?page=${api.page}`;
        Component = Card;
      } else if (hash.includes("#/search")) {
        apiUrl = `${api.SEARCHCHARACTER}${query}`;
        Component = SearchCard;
      } else {
        return false;
      }

      d.querySelector(".loader").style.display = "block";

      await ajax({
        url: apiUrl,
        cbSuccess: (characters) => {
          // console.log(characters);
          let html = "";
          characters.results.forEach((char) => (html += Component(char)));
          d.getElementById("main").insertAdjacentHTML("beforeend", html);
          d.querySelector(".loader").style.display = "block";
        },
      });
    }
  });
}
