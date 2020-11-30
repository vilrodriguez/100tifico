const Character = () => {
  const view = `
    <div class="characters-inner">
      <article class="Characters-card">
        <img src="image" alt="character's name">
        <h2>Name</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes:</h3>
        <h3>Status:</h3>
        <h3>Species:</h3>
        <h3>Gender:</h3>
        <h3>Origin:</h3>
        <h3>Last Location known:</h3>
      </article>
    </div>
  `;
    return view;
}
export default Character;