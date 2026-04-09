<!-- Instead of using goto() with buttons, just use <a> tags styled as buttons -->
<main>
  <div class="button-grid">
    <a href="/youtube"><img src=/image/zshit1.png alt="YouTube" /></a>
    <a href="/resources"><img src=/image/zshit1.png alt="Resources" /></a>
    <a href="/zstuff"><img src=/image/zshit1.png alt="ZStuff" /></a>
    <a href="/goals"><img src=/image/zshit1.png alt="Goals" /></a>
  </div>
</main>

<style>
  a {
    display: block;
    cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
  }

  a:hover {
    transform: scale(1.05);
    opacity: 0.85;
  }

  img {
    width: 180px;
    height: 180px;
    object-fit: contain;
    display: block;
  }

  .button-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>