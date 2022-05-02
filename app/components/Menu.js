

export function Menu() {
  const $menu = document.createElement('nav');
  $menu.classList.add('menu');
  $menu.innerHTML = `
    <a href="#/" >Home</a>
    <span>-</span>
    <a href="#/search" >Search</a>
    <span>-</span>
    <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener" >Api R&M</a>
    <span>-</span>
    <a href="#/contact" >Contact</a>
    <span>-</span>

  `;

  return $menu;
}
