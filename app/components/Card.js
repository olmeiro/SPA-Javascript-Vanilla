export function Card(props) {

  let { id, image, name, status, species, gender, created } = props;

  let dateFormat = new Date(created).getDate()
  
  const formatDate = (value) => {
    let date = new Date(value);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return day + '-' + month + '-' + year;
  }

  let newDate = formatDate(created);
  let imgCard = image ? image :'app/assets/without.png';

  //delegation event:
  document.addEventListener('click', e => {
    if(!e.target.matches('.main a')) return false;

    localStorage.setItem('card-id', e.target.dataset.id);
  })

  return `
    <article class="main">
      <img src="${imgCard}">
      <h2>${name}</h2>
      <p>
        <span>Status: ${status}</span>
        <span>Species: ${species}</span>
        <span>Gender:${gender}</span>
      </p>
      <p>
        <time datetime="${newDate}">Created: ${newDate}</time>
        <a href="#/${name}" data-id='${id}'>Ver más</a>
      </p>

    </article>
  `;
}