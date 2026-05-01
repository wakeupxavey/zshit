<script>
  import Navbar from '$lib/components/Navbar.svelte';

  import res1 from '$lib/assets/image/resources.png';
</script>

<Navbar />

<main>
  <div class="squareone">
    <h1>Resources</h1>
  </div>

  <div class="resources-container">
    <div class="list-section">
      <h2>Episodes</h2>
      <ul>
        <li><a href="/episode1">Where are your friends?</a></li>
        <li><a href="/episode2">Are we breaking up with our phones?</a></li>
        <li><a href="/episode3">Where did all our jobs go?</a></li>
      </ul>
    </div>

    <div class="image-section">
      <img src={res1} alt="Resources" />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
    background-color: #FBD1A2;
  }

  .squareone {
    width: 100%;
    text-align: center;
  }

  h1 {
    color: #BC4749;
    font-size: 3em;
  }

  .resources-container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 1rem;
  }

  .list-section {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
  }

  h2 {
    color: #BC4749;
    text-decoration: underline;
    font-size: 1.5em;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
  border: 2px solid #BC4749;
  border-radius: 6px;
  padding: 1rem;
  color: #BC4749;
  font-family: monospace;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  box-shadow: 0 4px 0px #BC4749;
}

li:hover {
  transform: translateY(2px);
  box-shadow: 0 2px 0px #BC4749;
}

li:active {
  transform: translateY(4px);
  box-shadow: 0 0px 0px #BC4749;
}

li a {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
}

  .image-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    flex: 1;
  }

  img {
    width: 60%;
    height: auto;
  }

  @media (max-width: 640px) {
    .resources-container {
      flex-direction: column;
    }
    img {
      width: 100%;
    }
  }
</style>