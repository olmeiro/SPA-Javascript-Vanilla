export function SearchCard (props) {
  let {name, image, id} = props;
   //delegation event:
  document.addEventListener('click', e => {
    if(!e.target.matches('.main a')) return false;

    localStorage.setItem('card-id', e.target.dataset.id);
  })

  return `
    <article class='main'>
      <h2>${name}</h2>
      <img src=${image} alt='character elected'/>
      <a href="#/${name}" data-id='${id}'>Ver más</a>
    </article>
  `;
}