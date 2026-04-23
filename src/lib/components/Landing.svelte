<!-- Instead of using goto() with buttons, just use <a> tags styled as buttons -->

<div class="squarezero">
    <h1 class="welcome">ZSHIT</h1>
  </div>
<main>

  <div class="squares-layout">

    <!-- ROW 1: zwordle + menu -->
    <div class="row row-one">
      <div class="squareone"></div>   <!-- zwordle -->
      <div class="squaretwo">
        <h1 class="menu">Menu</h1>
         <div class="button-grid">
         <a href="/goals"><img src=/image/goals.png alt="Goals" /></a>
         <a href="/resources"><img src=/image/resources.png alt="Resources" /></a>
         <a href="/youtube"><img src=/image/yt.png alt="YouTube" /></a>
    
      </div>


      </div>   <!-- menu -->
    </div>

    <!-- ROW 2: stick figure + speech bubble -->
    <div class="row row-two">
      <div class="squarethree">

        <img class = "stickman" src="/image/stickland1.png" alt="Stick Figure" />
      </div> <!-- stick figure -->
      <div class="squarefour"></div>  <!-- speech bubble -->
    </div>

    <!-- ROW 3: znews -->
    <div class="row row-three">
      <div class="squarefive"></div>  <!-- znews -->
    </div>

  </div>


</main>

<div class="squaresix"></div> <!-- footer -->

<style>
/* ── MAIN ── */
main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid black;
}

/* ── SQUARES LAYOUT ── */
.squares-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
}

/* ── ROWS ── */
.row {
  display: grid;
  gap: 1rem;
  width: 100%;
}

/* Mobile default (<640px) — columns shrink to fit */
.row-one {
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  justify-content: space-between; /* ← change this */

}

.row-two {
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  
}

.row-three {
  justify-items: end;
}

/* ── SQUARES — Mobile default ── */
.squarezero   { width: 100%; min-height: 80px;  border-radius: 8px; border: 3px solid black; background-color: lightgray; }
.squareone   { min-height: 160px; border-radius: 8px; background-color: #BC4749; border:#FBD1A2 solid 3px; }
.squaretwo   { min-height: 160px; border-radius: 8px; background-color: #FBD1A2;  display: flex;
  flex-direction: column; }
.squarethree { min-height: 160px; border-radius: 8px; background-color: rgb(255, 255, 255); }
.squarefour  { min-height: 160px; border-radius: 8px; background-color: #FBD1A2; }
.squarefive  { min-height: 120px; border-radius: 8px; background-color: lavender; width: 80%; }
.squaresix   { min-height: 60px;  border-radius: 8px; border: 3px solid black; background-color: lightgray; }

/* ── TABLET (640px–960px) ── */
@media (min-width: 640px) {
  .row-one {
    grid-template-columns: 380px 180px;
    justify-content: space-between; /* ← change this */

  }

  .row-two {
    grid-template-columns: 180px 380px;
  }

  .squareone   { min-height: 200px; }
  .squaretwo   { min-height: 200px; }
  .squarethree { min-height: 220px; }
  .squarefour  { min-height: 220px; }
  .squarefive  { min-height: 150px; width: 65%; }
  .squaresix   { min-height: 70px; }
}

/* ── DESKTOP (960px+) ── */
@media (min-width: 960px) {
  .row-one {
    grid-template-columns: 560px 240px;
    justify-content: space-between; /* ← change this */
  }


  .row-two {
    grid-template-columns: 240px 560px;
  }

  .squareone   { min-height: 240px; }
  .squaretwo   { min-height: 240px; align-self: end; }
  .squarethree { min-height: 260px; }
  .squarefour  { min-height: 260px; }
  .squarefive  { min-height: 180px; width: 60%; }
  .squaresix   { min-height: 80px; }
}

.stickman {
  width: 100%;
  height: 100%;
  object-fit: contain;
  justify-content: center;
}


.button-grid {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 5%;
  height: 100%;
  box-sizing: border-box;

}

.button-grid a {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
      transition: transform 0.15s ease, opacity 0.15s ease;

}

.button-grid img {
  width: 75%;
  max-width: 75%; /* fill the column width instead of a fixed px size */
  height: auto;
  object-fit: contain;
  justify-content: center;
}

.button-grid a:hover {
  transform: scale(1.08);
  opacity: 0.85;
}

.button-grid a:active {
  transform: scale(0.95);
  opacity: 0.7;
}

.menu {
  padding-bottom: 0%;
  justify-content: center;
  color: #BC4749;
  margin-left: auto;
  margin-right: auto;
}

.squarezero {
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #9e30329e;
  border: 2px solid black;
  box-shadow: 0 2.5px 1.5px #171616;
  justify-self: center;
  
}

.squaresix {
  width: 100%;
  text-align: center;
  background-color: #9e30329e;

}
.welcome {
  padding-top: 14px;
  justify-content: center;
  color: #FBD1A2;
  font-size: xx-large;
  margin-left: auto;
  margin-right: auto;
  font-family: Arial, sans-serif;
  font-weight: bold;
  letter-spacing: 2px;

}

</style>