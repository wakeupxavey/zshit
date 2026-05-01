<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
  <div class="squareone">
    <h1>Where are your friends?</h1>
  </div>

  <div class="video-section">
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/rBtGI2m6OqE?si=YDpwIzBwXPYv5KUg"
        title="Where are your friends?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <div class="sources-section">
    <h2>Sources</h2>
    <ul>
       <li><a href="https://www.statista.com/chart/20713/lonlieness-america/?srsltid=AfmBOoq2YcdNKLYgF4U65bLYmMa1dzIEp7Yt81JI2CqzUw7stfgim8mf">Is Lonely</a></li>
      <li><a href="https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf">Surgeon General</a></li>
      <li><a href="https://www.vice.com/en/article/your-loneliness-is-literally-killing-you/">Loneliness Kills</a></li>
      <li><a href="https://www.bls.gov/tus/">American Time Use Survey (Data)</a></li>
      <li><a href="https://www.bls.gov/tus/data.htm">American Time Use Survey (Data Files)</a></li>
      <li><a href="https://www.hhs.gov/sites/default/files/surgeon-general-social-connection-advisory.pdf">More Surgeon General</a></li>
      <li><a href="https://www.cnbc.com/2026/02/07/young-people-quiet-revolution-social-media.html">Gen Z Revolts</a></li>
      <li><a href="https://pudding.cool/2025/06/hello-stranger/">The Pudding is Cool</a></li>
      <li><a href="https://news.asu.edu/b/20250421-why-are-humans-social-creatures">Humans Social Creatures</a></li>
    </ul>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
    gap: 2rem;
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

  .video-section {
    display: flex;
    justify-content: center;
    padding: 0 1rem;
  }

  .video-wrapper {
    width: 100%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
  }

  .video-wrapper iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: 2px solid #BC4749;
    box-shadow: 0 4px 0px #BC4749;
  }

  .sources-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem 2rem;
    max-width: 800px;
    width: 100%;
    align-self: center;
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

  @media (max-width: 640px) {
    h1 {
      font-size: 2em;
    }
  }
</style>