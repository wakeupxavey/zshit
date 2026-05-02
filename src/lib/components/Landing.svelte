<!-- Instead of using goto() with buttons, just use <a> tags styled as buttons -->

<script>
	import Zwordle from "./Zwordle.svelte";
  import Chaoswall from "./Chaoswall.svelte";

  let show = true;

// background decorations
  import image5 from '../assets/image/sitestuff5.png';
  import image1 from '../assets/image/sitestuff1.png';
  import image2 from '../assets/image/sitestuff2.png';
  import image3 from '../assets/image/sitestuff3.png';
  import image4 from '../assets/image/sitestuff4.png';
  import image6 from '../assets/image/sitestuff6.png';
  import image7 from '../assets/image/sitestuff7.png';

// menu

  import goals from '../assets/image/goals.png';
  import resources from '../assets/image/resources.png';
  import yt from '../assets/image/yt.png';

// stick figure + bubble

  import stickland1 from '../assets/image/stickland1.png';
  import bubble from '../assets/image/bubble.png';

// footer

  import mail from '../assets/image/sitestuff7.png';


  // base

  import { base } from "$app/paths";

  // poke stickman function
  let poked = false;

  function pokeStickman() {
  poked = true;
  setTimeout(() => { poked = false; }, 3000);
}

</script>

<div class="squarezero">
    <h1 class="welcome">Z SITE!</h1>
  </div>
<main>
  <div class="bg-decorations">
  
    <img src={image1} alt="" class="bg-img bg1" />
    <img src={image2} alt="" class="bg-img bg2" />
    <img src={image3} alt="" class="bg-img bg3" />
    <img src={image4} alt="" class="bg-img bg4" />
    <img src={image5} alt="" class="bg-img bg5" />
    <img src={image6} alt="" class="bg-img bg6" />
    <img src={image7} alt="" class="bg-img bg7" />
     
   </div>
 <!-- rest of your content -->

  <div class="squares-layout">

    <!-- ROW 1: zwordle + menu -->
    <div class="row row-one">
      <div class="squareone"><Zwordle/></div>   <!-- zwordle -->
      <div class="squaretwo">
        <h1 class="menu">Menu</h1>
         <div class="button-grid">
         <a href="{base}/goals"><img src={goals} alt="Goals" /></a>
         <a href="{base}/resources"><img src={resources} alt="Resources" /></a>
         <a href="{base}/youtube"><img src={yt} alt="YouTube" /></a>

      </div>


      </div>   <!-- menu -->
    </div>

    <!-- ROW 2: stick figure + speech bubble -->
    <div class="row row-two">
      <div class="squarethree">
           <div class="stickbutton"> 
                <a class="small-rect" href="{base}/#" on:click|preventDefault={() => show = !show}>Click me!</a>
            </div>
            <!--stickman button  -->
      <button class="stickman-btn" on:click={pokeStickman}>
            <img class="stickman" src={stickland1} alt="Stick Figure" />
      </button>

      </div> <!-- stick figure -->
      <div class="squarefour">
        <img class="bubble" src={bubble} alt="Speech Bubble">
         <p class="bubble-text" class:show={show && !poked} class:hide={!show || poked}>Hello <span style="color: #BC4749;">newbie.</span></p>
         <p class="bubble-text welcome" class:show={!show && !poked} class:hide={show || poked} style="color: black;"> Welcome to <span>Z</span><span> </span><span>S</span><span>I</span><span>T</span><span>E</span><span>!</span></p>
         <p class="bubble-text" class:show={poked} class:hide={!poked} style="color: black;">Why would you do that?</p>
      </div>
    </div>

    <!-- ROW 3: znews -->
    <div class="row row-three">
      <div class="squarefive"><Chaoswall/></div>  <!-- znews -->
    </div>

  </div>


</main>

<div class="squaresix">
   <p class="footer-text">text me pls</p>

   <a href="https://mail.google.com/mail/?view=cm&to=youremail@gmail.com" target="_blank" class="footer-input">
  zmessage...
</a>
    <img src={mail} alt="Mail" class="mail-icon" />

</div> <!-- footer -->

<style>
/* ── MAIN ── */
main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem;
}

/* ── SQUARES LAYOUT ── */
.squares-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  position: relative;
  z-index: 1;
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
.squarethree { height: 200px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; overflow: hidden; }
.squarefour  { height: 200px; border-radius: 8px;  position: relative;}
.squarefive  { min-height: 120px; border-radius: 8px; width: 90%; }
.squaresix   { width: 100%; min-height: 60px; border-radius: 8px; border: 1px solid black; text-align: center; background-color: #BC4749; display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 0 1.5rem; box-sizing: border-box; }
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
  .squarethree { height: 360px; }
  .squarefour  { height: 360px; }
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
  .squarethree { height: 400px; }
  .squarefour  { height: 400px; }
  .squarefive  { min-height: 180px; width: 60%; }
  .squaresix   { min-height: 80px; }
}

.stickman {
  width: 100%;
  height: 100%;
  object-fit: contain;
  justify-content: center;
  transform-origin: bottom center; /* pivots from the feet */
  animation: sway 2s ease-in-out infinite;
  
}

.stickman-btn {
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bubble {
  width: 100%;
  height: 80%;
  object-fit: contain;
  justify-content: center;
  display: block;
}

.bubble-text {
  position: absolute;
  top: 15%;          /* adjust to move text up/down on the bubble */
  left: 60%;
  transform: translateX(-50%); 
  text-align: center;
  width: 50%; 
  z-index: 4;
  font-family: monospace, sans-serif; 
  font-size: 1.1rem !important;
}


.show {
  display: block;
}

.hide {
  display: none;
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
  width: 85%;
  max-width: 85%; /* fill the column width instead of a fixed px size */
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
  font-weight: 1000;
  letter-spacing: 2px;

}


.stickbutton {
  display: block;
  flex-direction: column;
  align-items: center;
  padding: 3px;
  flex-shrink: 0;  /* add this */
}
.small-rect {
  display: block;
  width: 110%;
  height: 30px;
  padding: 1px 0;
  background-color: #FBD1A2; 
  color: #BC4749;
  border: none;
  border-radius: 5px;
  margin-bottom: 1px;
  margin-top: 15px;  /* reduced */
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  font-family: Arial, sans-serif;
  font-weight: bold;
 
  transition: background-color 0.15s ease, transform 0.15s ease;
}

.small-rect:hover {
  background-color: #9e3032;
  transform: scale(1.05);
}

.small-rect:active {
  transform: scale(0.95);
}

.footer-text {
  color: #FBD1A2;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: center;
}

.footer-input {
  border-radius: 999px;
  border: none;
  padding: 6px 16px;
  background-color: #d9d9d9;
  color: #555;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.footer-input:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.mail-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

main {
  position: relative; /* add this to your existing main rule */
}

.bg-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none; /* so they don't block clicks */
  z-index: 0;
  overflow: hidden;
}

.bg-img {
  position: absolute;
  opacity: 0.3; /* subtle, adjust to taste */
  width: 80px;  /* adjust size to taste */
  object-fit: contain;
}

/* Place each one randomly around the main area */
.bg1 { top: 47%;  right: 40%; }
.bg2 { top: 30%; right: 85%; }
.bg3 { top: 55%; right: 80%; }
.bg4 { top: 45%; right: 1%; }
.bg5 { top: 75%; left: 2%; }
.bg6 { top: 30%; right: 30%; }
.bg7 { top: 30%; left: 6%; }

@keyframes sway {
  0%   { transform: rotate(0deg); }
  25%  { transform: rotate(5deg); }
  75%  { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

@keyframes colorflow {
  0%, 100% { color: #FBD1A2; }
  50%       { color: #BC4749; }
}

.bubble-text.welcome span {
  display: inline-block; /* also missing this — needed for animation! */
  animation: colorflow 2s ease-in-out infinite;
}

/* stagger each letter's delay so the flow moves left to right */
.bubble-text.welcome span:nth-child(1) { animation-delay: 0s; }
.bubble-text.welcome span:nth-child(2) { animation-delay: 0.2s; }
.bubble-text.welcome span:nth-child(3) { animation-delay: 0.4s; }
.bubble-text.welcome span:nth-child(4) { animation-delay: 0.6s; }
.bubble-text.welcome span:nth-child(5) { animation-delay: 0.8s; }
.bubble-text.welcome span:nth-child(6) { animation-delay: 1.0s; }
.bubble-text.welcome span:nth-child(7) { animation-delay: 1.2s; }
</style>