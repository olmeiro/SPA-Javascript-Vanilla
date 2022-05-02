export function SearchForm() {
  const d = document;

  const $form = d.createElement("form");
  const $input = d.createElement("input");

  $form.classList.add("form-search");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";

  $form.appendChild($input);

  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("characterToSearch");
  }

  d.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("characterToSearch");
  });

  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".form-search")) return false;
    e.preventDefault();
    localStorage.setItem("characterToSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
