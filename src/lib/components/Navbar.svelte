<script>
  import {base} from "$app/paths";
</script>

<nav>
  <a href="{base}/youtube">yt</a>
  <a href="{base}/resources">resources</a>
  <!-- <a href="{base}/zstuff">ZStuff</a> -->
  <a href="{base}/goals">about</a>
  <a href="{base}/">home</a>
</nav>

<style>
  nav {
    display: flex;
    gap: 1rem;
    padding: 1rem 2rem;
    background-color: #9e30329e;
    position: sticky;
    top: 0;
    z-index: 100;
    border: 2px solid black;
    flex-direction: row-reverse;
    box-shadow: 0 3px 1.5px black;
  }

  a {
    color: #FBD1A2;
    text-decoration: none;
    font-size: 1rem;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.7;
  }
</style>