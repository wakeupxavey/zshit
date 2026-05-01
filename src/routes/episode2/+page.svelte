<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
  <div class="squareone">
    <h1>Are we breaking up with our phones?</h1>
  </div>

  <div class="video-section">
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/Y0ACBjEqbo4?si=FRrSndn71_K8_0U0"
        title="Are we breaking up with our phones?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <div class="sources-section">
    <h2>Sources</h2>
    <ul>
      <li><a href="https://dcdx.co/gen-z-screen-time-report-2024">Screentime Survey</a></li>
      <li><a href="https://www.addictioncenter.com/behavioral-addictions/phone-addiction/">Phone Addiction Definition</a></li>
      <li><a href="https://www.harmonyhit.com/gen-z-anxiety-statistics/">50% Daily Anxiety</a></li>
      <li><a href="https://www.visualcapitalist.com/cp/visualizing-the-daily-scroll-of-the-average-social-media-user/">Daily Scroll is 300 Feet Long</a></li>
      <li><a href="https://philosophynow.org/issues/145/Kierkegaard_Young_Free_and_Anxious">Kierkegaard on Anxiety</a></li>
      <li><a href="https://theharrispoll.com/articles/gen-z-social-media-smart-phones/">Harris Poll on How We See Social Media</a></li>
      <li><a href="https://www.nysscpa.org/article-content/survey-gen-z-consumes-the-most-media-daily-compared-to-other-generations-111124#sthash.n9I8eLpL.dpbs">Most Media-Loving Gen</a></li>
      <li><a href="https://www.nbcwashington.com/news/local/flip-phone-summer-gen-z-ditch-smartphones-to-disconnect-from-social-media/3958907/">Flip Phone Summer</a></li>
      <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10740995/">First Study</a></li>
      <li><a href="https://psycnet.apa.org/record/2022-50916-001?doi=1">Second Study</a></li>
      <li><a href="https://www.harmonyhit.com/phone-screen-time-statistics/">We Want to Cut Down</a></li>
      <li><a href="https://www.boredomsociety.com/jbs/index.php/journal">Journal of Boredom Studies</a></li>
      <li><a href="https://www.boredomsociety.com/jbs/index.php/journal">Boredom Drives Us</a></li>
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