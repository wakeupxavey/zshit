<script>
  import { getRandomWord } from './words.js';

  let word = getRandomWord();
  let guessed = new Set();
  let maxWrong = 7;
  let modalOpen = false;

  $: wrongGuesses = [...guessed].filter(l => !word.includes(l)).length;
  $: won = word.split('').every(l => guessed.has(l));
  $: lost = wrongGuesses >= maxWrong;
  $: gameOver = won || lost;

  $: imageIndex = won ? 8 : wrongGuesses;
  $: hangmanSrc = `/image/hangman${imageIndex}.png`;

  /** @param {string} letter */
  function guess(letter) {
    if (gameOver || guessed.has(letter)) return;
    guessed = new Set([...guessed, letter]);
  }

  function restart() {
    word = getRandomWord();
    guessed = new Set();
  }

  function openModal() { 
    modalOpen = true; 
    animating = false;
  }
  function closeModal() { modalOpen = false; }

  const rows = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M']
  ];

  let animating = true;


</script>

<!-- COMPACT VIEW -->
<div class="zwordle-compact">
  <h2 class="zhang-title">Z-Hang</h2>
  <p class="subhead">basic unc test</p>

  <div class="compact-gallows">
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" class="compact-svg">
      <line x1="5" y1="115" x2="55" y2="115" stroke="#FBD1A2" stroke-width="6" stroke-linecap="round"/>
      <line x1="20" y1="115" x2="20" y2="5" stroke="#FBD1A2" stroke-width="6" stroke-linecap="round"/>
      <line x1="20" y1="5" x2="70" y2="5" stroke="#FBD1A2" stroke-width="6" stroke-linecap="round"/>
      <line x1="70" y1="5" x2="70" y2="18" stroke="#FBD1A2" stroke-width="4" stroke-linecap="round"/>
    </svg>
  </div>

  <button class="word-display-btn" class:animating on:click={openModal} aria-label="Open game">
  {#each word.split('') as letter, i (i)}
    <span class="letter-box" style="animation-delay: {i * 0.1}s">
      {guessed.has(letter) ? letter : '_'}
    </span>
  {/each}
</button>

  <span class="guess-prompt">guess here!</span>
</div>

<!-- MODAL OVERLAY -->
{#if modalOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="overlay" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>

      <button class="close-btn" on:click={closeModal}>✕</button>

      <h2 class="zhang-title modal-title">Z-Hang</h2>

      <!-- GALLOWS + IMAGE -->
      <div class="hangman-row">
        <div class="hangman-wrap">
          <svg class="gallows" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
            <line x1="-55" y1="125" x2="25" y2="125" stroke="#c0b8b8" stroke-width="6" stroke-linecap="round"/>
            <line x1="-20" y1="125" x2="-20" y2="-10" stroke="#c0b8b8" stroke-width="6" stroke-linecap="round"/>
            <line x1="-20" y1="-10" x2="55" y2="-10" stroke="#c0b8b8" stroke-width="6" stroke-linecap="round"/>
            <line x1="55" y1="13" x2="55" y2="-10" stroke="#FBD1A2" stroke-width="4" stroke-linecap="round"/>
          </svg>
          <img src={hangmanSrc} alt="Hangman stage" class="hangman-img" />
        </div>
      </div>

      <!-- WORD DISPLAY -->
      <div class="word-display">
        {#each word.split('') as letter, i (i)}
          <span class="letter-box modal-letter">
            {guessed.has(letter) ? letter : '_'}
          </span>
        {/each}
      </div>

      <!-- WIN / LOSE MESSAGE -->
      {#if won}
        <p class="message win">🎉 You got it!</p>
      {:else if lost}
        <p class="message lose">💀 The word was <strong>{word}</strong></p>
      {/if}

      <!-- KEYBOARD -->
      {#if !gameOver}
        <div class="keyboard">
          {#each rows as row, ri (ri)}
            <div class="keyboard-row">
              {#each row as letter (letter)}
                <button
                  class="key"
                  class:correct={guessed.has(letter) && word.includes(letter)}
                  class:wrong={guessed.has(letter) && !word.includes(letter)}
                  disabled={guessed.has(letter)}
                  on:click={() => guess(letter)}
                >
                  {letter}
                </button>
              {/each}
            </div>
          {/each}
        </div>
      {:else}
        <button class="play-again" on:click={restart}>Play Again</button>
      {/if}

    </div>
  </div>
{/if}

<style>
  /* ── COMPACT VIEW ── */
  .zwordle-compact {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem;
  width: 100%;
  box-sizing: border-box;
  width: fit-content;
}

.subhead {
  color: #FBD1A2;
  font-family: monospace;
  font-size: 0.75rem;
  margin: 0;
}

.compact-gallows {
  display: flex;
  justify-content: center;
}

.compact-svg {
  width: 60px;
  height: 72px;
}

.guess-prompt {
  color: #FBD1A2;
  font-family: monospace;
  font-size: 0.75rem;
  white-space: nowrap;
}

  .zhang-title {
    color: #FBD1A2;
    font-family: monospace;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }


  .guess-prompt {
    color: #FBD1A2;
    font-family: monospace;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  .word-display-btn {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    border-radius: 6px;
    transition: background-color 0.15s ease;
  }

  .word-display-btn:hover {
    background-color: rgba(188, 71, 73, 0.1);
  }

  /* ── SHARED LETTER BOX ── */
  .letter-box {
    font-size: 0.9rem;
    font-weight: bold;
    width: 1.1rem;
    text-align: center;
    border-bottom: 2px solid #FBD1A2;
    color: #FBD1A2;
    font-family: Arial, sans-serif;
  }

  /* ── MODAL ── */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
  background: #BC4749;
  border-radius: 12px;
  border: 2px solid #FBD1A2;
  box-shadow: 0 4px 0px 4px #FBD1A2;
  padding: 1.2rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  width: min(95vw, 420px);
  height: min(90vh, 620px);
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;
}

  .modal-title {
    font-size: 1.4rem;
  }

  .close-btn {
    position: absolute;
    top: 0.6rem;
    right: 0.8rem;
    background: none;
    border: none;
    color: #FBD1A2;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
    line-height: 1;
  }

  .close-btn:hover { opacity: 0.7; }

  /* ── HANGMAN ── */
  .hangman-row {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .hangman-wrap {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 180px;
}

  .gallows {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: visible;
  }

  .hangman-img {
  display: block;
  max-height: 160px;
  padding-top: 28px;
  object-fit: contain;
}

  /* ── WORD DISPLAY (modal) ── */
  .word-display {
    display: flex;
    gap: 0.3rem;
    flex-wrap: wrap;
    justify-content: center;
  }

 .modal-letter {
  font-size: 2.2rem;
  width: 2.6rem;
}
  /* ── KEYBOARD ── */
  .keyboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    width: 100%;
  }

  .keyboard-row {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
  }

  .key {
    width: 2rem;
    height: 2.4rem;
    font-size: 0.7rem;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    background-color: #FBD1A2;
    color: #BC4749;
    cursor: pointer;
    font-family: Arial, sans-serif;
    transition: transform 0.1s ease, background-color 0.15s ease;
    box-shadow: 0 2px 0px rgba(0,0,0,0.3);
  }

  .key:hover:not(:disabled) {
    transform: scale(1.1);
    background-color: #f5b97a;
  }

  .key:active:not(:disabled) {
    transform: translateY(2px);
    box-shadow: none;
  }

  .key:disabled { cursor: not-allowed; }

  .key.correct {
    background-color: #4caf50;
    color: white;
    box-shadow: 0 2px 0px rgba(0,0,0,0.15);
  }

  .key.wrong {
    background-color: #9e3032;
    color: white;
    opacity: 0.6;
    box-shadow: none;
  }

  /* ── MESSAGES ── */
  .message {
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 0.85rem;
  }

  .win  { color: #4caf50; }
  .lose { color: #FBD1A2; }

  .play-again {
    padding: 0.4rem 1.2rem;
    background-color: #FBD1A2;
    color: #BC4749;
    border: none;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: bold;
    cursor: pointer;
    font-family: Arial, sans-serif;
    transition: background-color 0.15s ease, transform 0.15s ease;
    box-shadow: 0 2px 0px rgba(0,0,0,0.2);
  }

  .play-again:hover {
    background-color: #f5b97a;
    transform: scale(1.05);
  }
@media (min-width: 640px) {
  .zhang-title {
    font-size: 1.6rem;
  }

  .subhead {
    font-size: 0.9rem;
  }

  .compact-svg {
    width: 80px;
    height: 96px;
  }

  .letter-box {
    font-size: 1.1rem;
    width: 1.4rem;
  }

  .guess-prompt {
    font-size: 0.9rem;
  }
}

@media (min-width: 960px) {
  .zhang-title {
    font-size: 2rem;
  }

  .subhead {
    font-size: 1rem;
  }

  .compact-svg {
    width: 110px;
    height: 132px;
  }

  .letter-box {
    font-size: 1.3rem;
    width: 1.6rem;
  }

  .guess-prompt {
    font-size: 1rem;
  }
}

  @keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.animating .letter-box {
  animation: wave 1s ease-in-out infinite;
}
</style>