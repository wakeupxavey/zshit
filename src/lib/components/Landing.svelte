<!-- Instead of using goto() with buttons, just use <a> tags styled as buttons -->
<main style="border: 1px solid black">
  <div class="button-grid">
    <a href="/youtube"><img src=/image/yt.png alt="YouTube" /></a>
    <a href="/resources"><img src=/image/resources.png alt="Resources" /></a>
    <a href="/zstuff"><img src=/image/zstuff.png alt="ZStuff" /></a>
    <a href="/goals"><img src=/image/goals.png alt="Goals" /></a>
  </div>

  <div class="squareone">
  
  </div>
  
  <div class="squaretwo">
  
  </div>
   
  <div class="squarethree">
  
  </div>
</main>

<style>
  .squareone { 
    background-color: lightblue;
    width: 100px;
    height: 100px;
  }

  .squaretwo { 
    background-color: lightcoral;
    width: 100px;
    height: 100px;
  }

  .squarethree { 
    background-color: lightgreen;
    width: 100px;
    height: 100px;
  }
  
  
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