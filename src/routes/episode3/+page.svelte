<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
  <div class="squareone">
    <h1>Where did all our jobs go?</h1>
  </div>

  <div class="video-section">
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/SDbd_TWPUo4?si=X9tNUe4kXoUrZTR2"
        title="Where did all our jobs go?"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <div class="sources-section">
    <h2>Sources</h2>
    <ul>
        <li><a href="https://www.newyorkfed.org/research/college-labor-market#--:explore:unemployment">Unemployment 4 Us</a></li>
        <li><a href="https://www.reveliolabs.com/news/macro/is-ai-responsible-for-the-rise-in-entry-level-unemployment/">Less Jobs (Revelio)</a></li>
        <li><a href="https://www.cnn.com/2026/02/06/tech/ai-entry-level-jobs-teens">Less Jobs (CNN)</a></li>
        <li><a href="https://www.cnbc.com/2025/08/18/job-hugging-job-hopping.html">Less Jobs (CNBC)</a></li>
        <li><a href="https://vidcruiter.com/resources/fake-and-ghost-jobs/">Ghost Jobs</a></li>
        <li><a href="https://www.visualcapitalist.com/chart-inflation-hit-the-hardest-by-category-2000-2025/">Inflation</a></li>
        <li><a href="https://sites.lsa.umich.edu/mje/2026/01/11/inflation-housing-affordability-and-the-reshaping-of-young-adult-independence/">Michigan Thing</a></li>
        <li><a href="https://www.businessinsider.com/college-costs-tuition-gen-z-room-board-generational-differences-boomers-2021-3">Double What Boomers Paid for College</a></li>
        <li><a href="https://www.nbcnews.com/politics/politics-news/poll-dramatic-shift-americans-no-longer-see-four-year-college-degrees-rcna243672">College Degrees Not Super Chill Anymore</a></li>
        <li><a href="https://open.spotify.com/track/5SxlUF7J8tyFIEF22EomeP?si=6460ff622c8d48b4">Jaden Smith Interlude</a></li>
        <li><a href="https://fortune.com/2025/10/29/americans-lose-faith-us-colleges-gen-z-blue-collar-work-trump-administration-careers-jobs-ai/">Blue Collar Jobs</a></li>
        <li><a href="https://www.forbes.com/councils/forbesbusinesscouncil/2025/04/28/not-your-parents-trades-making-way-for-the-toolbelt-generation/">Blue Collar Jobs Again</a></li>
        <li><a href="https://www.intuit.com/blog/innovative-thinking/gen-z-entrepreneurs/">Generation Small Bizness</a></li>
        <li><a href="https://www.weforum.org/stories/2023/10/skills-economy-what-is-it/">Skills Economy</a></li>
        <li><a href="https://news.stanford.edu/stories/2024/02/8-things-expect-gen-z-coworker">How We Change Le Workforce</a></li>
        <li><a href="https://www.bls.gov/opub/mlr/2021/article/projections-overview-and-highlights-2020-30.htm#:~:text=Between%202020%20and%202030%2C%20the,of%20165.4%20million%20in%202030">More Workforce</a></li>
        <li><a href="https://youtu.be/RrOGQD4Z9A4?si=M_P4QFootR-LEaBF">Jim Carry Me Awayyy</a></li>
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