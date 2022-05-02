export function Main(props) {
  const $Main = document.createElement('section');
  $Main.id ='main';

  if(!location.hash.includes('#/search')){
    $Main.classList.add('grid-fluid');
  }

  return $Main;
}