export function Character(props) {

  const {image, name, origin, gender, location, species, status, type} = props;

  return `
    <section class="character-page">
      <aside>
        <h2>${name}</h2>
        <img src=${image} alt='character elected'/>
      </aside>
      <hr/>
      <article>
        origin: ${origin}
        gender: ${gender}
        location: ${location}
        species: ${species}
        status: ${status}
        type: ${type ? type : 'none'}
      </article>
    </section>
  `;
}