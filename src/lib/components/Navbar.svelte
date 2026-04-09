<nav>
  <a href="/youtube">YouTube</a>
  <a href="/resources">Resources</a>
  <a href="/zstuff">ZStuff</a>
  <a href="/goals">Goals</a>
</nav>

<style>
  nav {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 2rem;
    background: #333;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.7;
  }
</style>