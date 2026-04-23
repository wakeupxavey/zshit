<script>
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main>
   <div class="squarezero">
      <h1>Youtube</h1>
  </div>

  <div class="youtube-container">

  <a href="https://www.youtube.com/@Zsh.t" target="_blank" rel="noopener noreferrer">
      <img src="/image/yt.png" alt="YouTube" />
    </a>
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
  border: 1px solid black;
  background-color: aliceblue;
}

  .youtube-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  /* border: 1px solid black;
  border-radius: 8px; */
  align-items: center; /* add this */

}

img {
  display: block;
  margin: 0 auto;
  width: 40%;
  height: 40%;
}

a {
  display: block; /* add this */
  transition: transform 0.2s ease, opacity 0.2s ease; /* move transition here so hover/active work */
}

a:hover {
  transform: scale(1.08);
  opacity: 0.85;
}

a:active {
  transform: scale(0.95);
  opacity: 0.7;
}


    .squarezero {
  width: 100%;
  padding-top: 3%;
  text-align: center;
  
}
    h1 {
      color: #D44244;
      font-size: 3em;
    }

  
  </style>
