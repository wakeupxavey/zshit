<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase';

  // ── Types ────────────────────────────────────────────────
  type Note = {
    text: string;
    initials: string;
    colorIdx: number;
    ep: string | null;
  };

  type Slot = {
    note: Note;
    rot: number;
    flipped: boolean;
  };

  // ── Config ──────────────────────────────────────────────
  const MAX_CHARS = 60;
  const MAX_NAME  = 3;

  const BAD_WORDS = ['ass','asshole','bastard','bitch','bollocks','bullshit','cock','crap','cum','cunt','damn','dick','dildo','douche','dumbass','fag','faggot','fuck','fucker','fucking','goddamn','hell','jackass','jerk','motherfucker','nigga','nigger','piss','prick','pussy','retard','shit','shithead','slut','twat','whore','wanker','spic','kike','chink','gook','wetback','tranny','dyke','homo','rape','rapist','pedophile','pedo','molest','molester','genocide','terrorist','jihad','nazi','hitler','kkk','lynch','slavery','porn','pornography','xxx','nude','naked','blowjob','handjob','masturbate','masturbation','orgasm','penis','vagina','boobs','tits','titties','anus','anal','boner','erection','ejaculate','ejaculation','semen','sperm','condom','viagra','prostitute','prostitution','escort','stripper','brothel','pimp','whoring','onlyfans','camgirl','suicide','selfharm','self-harm','anorexia','bulimia','overdose','noose','heroin','cocaine','meth','methamphetamine','crack','fentanyl','opioid','weed','marijuana','cannabis','drugdealer','drugdealing','kill','murder','stab','shoot','bomb','explosive','grenade','shooting','massacre','genocide','violence','abuse','bully','bullying','harass','harassment','stalk','stalking','phishing','malware','virus','ransomware']
  
  const NOTE_COLORS = [
    { bg: '#FBD1A2', tc: '#7a3e1a' },
    { bg: '#fff8e7', tc: '#7a5c1e' },
    { bg: '#e8f5e9', tc: '#2e5e35' },
    { bg: '#fce4ec', tc: '#7b1f3a' },
    { bg: '#e3f2fd', tc: '#1a3f6e' },
    { bg: '#f3e5f5', tc: '#4a1a6e' },
  ];

  const ROTATIONS = [-2, 1.5, 1, -1, -1.8, 2, 0.5, -0.8];

  const SEED_NOTES: Note[] = [
    { text: '"applied for a job and they stole my personal data"',        initials: 'ZZZ',   colorIdx: 0, ep: null },
    { text: '"took a mental health day after the nuggets lost"',        initials: 'MPJ', colorIdx: 1, ep: null },
    { text: '"cried at trader joe\'s after the workers roasted my fit"', initials: 'UNC', colorIdx: 2, ep: null },
    { text: '"told my landlord that my place always had that john cena mural"',      initials: 'JIM',   colorIdx: 3, ep: null },
    { text: '"got a plant. killed the plant. got another plant."',        initials: 'PVZ', colorIdx: 4, ep: null },
    { text: '"opened my credit card statement and disassociated"',       initials: 'CLD',   colorIdx: 5, ep: null },
  ];

  // ── State ────────────────────────────────────────────────
  let allNotes:  Note[] = [];
  let displayed: Slot[] = [];
  let modalOpen  = false;
  let inputText  = '';
  let inputName  = '';
  let error      = '';
  let loading    = true;

  // ── Helpers ──────────────────────────────────────────────
  function pickRandom(pool: Note[], count: number): Note[] {
    const copy = [...pool];
    const out: Note[] = [];
    while (out.length < count && copy.length) {
      const i = Math.floor(Math.random() * copy.length);
      out.push(copy.splice(i, 1)[0]);
    }
    return out;
  }

  function buildDisplayed(pool: Note[]): Slot[] {
    const picked = pickRandom(pool, 4);
    return picked.map((note) => ({
      note,
      rot: ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)],
      flipped: false,
    }));
  }
  // Basic normalization to catch common obfuscations, not meant to be exhaustive or foolproof

  function normalize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[@4]/g, 'a')
    .replace(/[1!|]/g, 'i')
    .replace(/[3]/g, 'e')
    .replace(/[0]/g, 'o')
    .replace(/[5$]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/[-_.]/g, ''); // collapse dashes, dots — but NOT spaces anymore
}

function containsBadWord(str: string): boolean {
  const normalized = normalize(str);   // preserves spaces for boundary matching
  const original   = str.toLowerCase();

  return BAD_WORDS.some(w => {
    const normalizedWord = normalize(w);
    // Use \b on both — works on original AND normalized (spaces preserved)
    const boundaryRegex         = new RegExp(`\\b${w}\\b`, 'i');
    const normalizedBoundaryRegex = new RegExp(`\\b${normalizedWord}\\b`, 'i');

    return boundaryRegex.test(original) || normalizedBoundaryRegex.test(normalized);
  });
}

  // ── Supabase ─────────────────────────────────────────────
  async function loadNotes(): Promise<Note[]> {
    const { data, error: err } = await supabase
      .from('notes')
      .select('text, initials, color_idx')
      .order('created_at', { ascending: false });

    if (err) {
      console.warn('Could not load notes from Supabase', err);
      return [];
    }

    return (data ?? []).map((row) => ({
      text: row.text,
      initials: row.initials,
      colorIdx: row.color_idx,
      ep: null,
    }));
  }

  async function saveNote(note: Note): Promise<void> {
    const { error: err } = await supabase.from('notes').insert({
      text: note.text,
      initials: note.initials,
      color_idx: note.colorIdx,
    });
    if (err) console.warn('Could not save note to Supabase', err);
  }

  // ── Lifecycle ────────────────────────────────────────────
  onMount(async () => {
    const community = await loadNotes();
    allNotes = [...SEED_NOTES, ...community];
    displayed = buildDisplayed(allNotes);
    loading = false;
  });

  // ── Actions ──────────────────────────────────────────────
  function shuffle(): void {
    displayed = buildDisplayed(allNotes);
  }

  function flipNote(i: number): void {
    displayed[i] = { ...displayed[i], flipped: !displayed[i].flipped };
    displayed = [...displayed];
  }

  function openModal(): void { modalOpen = true; inputText = ''; inputName = ''; error = ''; }
  function closeModal(): void { modalOpen = false; }

  async function submitNote(): Promise<void> {
    error = '';
    const text = inputText.trim();
    const name = inputName.trim().toUpperCase().slice(0, MAX_NAME) || '???';

    if (!text) { error = 'say something!'; return; }
    if (text.length > MAX_CHARS) { error = `keep it under ${MAX_CHARS} characters!`; return; }
    if (containsBadWord(text) || containsBadWord(name)) { error = 'keep it (mostly) clean!'; return; }

    const colorIdx = Math.floor(Math.random() * NOTE_COLORS.length);
    const newNote: Note = { text: `"${text}"`, initials: name, colorIdx, ep: null };

    await saveNote(newNote);

    allNotes = [...allNotes, newNote];
    displayed[0] = { note: newNote, rot: ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)], flipped: false };
    displayed = [...displayed];

    closeModal();
  }

  function handleKey(e: KeyboardEvent): void {
    if (e.key === 'Escape') closeModal();
  }
</script>

<svelte:window on:keydown={handleKey} />

<!-- ── WALL ─────────────────────────────────────────────── -->
<div class="wall">

  <div class="wall-header">
    <h2 class="wall-title">the chaos wall</h2>
    <button class="make-btn" on:click={openModal}>+ make your own</button>
  </div>

 {#if loading}
  <p style="color: #FBD1A2; font-size: 0.75rem; text-align: center; padding: 1rem 0;">
    loading the chaos...
  </p>
{:else}
  <div class="grid">
    {#each displayed as slot, i (i)}
      {@const color = NOTE_COLORS[slot.note.colorIdx ?? 0]}
      <button
        class="note"
        class:flipped={slot.flipped}
        style="--bg:{color.bg}; --tc:{color.tc}; --rot:{slot.rot}deg;"
        on:click={() => flipNote(i)}
        aria-label="sticky note"
      >
        <div class="face front">
          <p class="note-text">{slot.note.text}</p>
        </div>
        <div class="face back">
          <p class="back-initial">— {slot.note.initials}</p>
        </div>
      </button>
    {/each}
  </div>
{/if}

  <button class="shuffle-btn" on:click={shuffle}>shuffle chaos ↻</button>
</div>

<!-- ── MODAL ─────────────────────────────────────────────── -->
{#if modalOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="overlay" on:click={closeModal}>
    <div class="modal" on:click|stopPropagation>

      <button class="close-x" on:click={closeModal}>✕</button>
      <h3 class="modal-title">leave a note</h3>

      <textarea
        class="note-input"
        placeholder="say something real... (max {MAX_CHARS} chars)"
        maxlength={MAX_CHARS}
        bind:value={inputText}
        rows="3"
      ></textarea>
      <div class="char-count">{inputText.length}/{MAX_CHARS}</div>

      <input
        class="name-input"
        type="text"
        placeholder="initials (max 3)"
        maxlength={MAX_NAME}
        bind:value={inputName}
      />

      {#if error}
        <p class="error">{error}</p>
      {/if}

      <button class="submit-btn" on:click={submitNote}>pin it ↗</button>
    </div>
  </div>
{/if}

<!-- ── STYLES ─────────────────────────────────────────────── -->
<style>
  .wall {
    border-radius: 14px;
    padding: 1.2rem 1rem 1rem;
    font-family: monospace;
    width: 100%;
    box-sizing: border-box;
    
  }

  .wall-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.9rem;
  }

  .wall-title {
    color: #FBD1A2;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

.make-btn {
  background-color: transparent;
  border: 1.5px solid #FBD1A2;
  color: #FBD1A2;
  font-family: monospace;
  font-size: 0.7rem;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: background-color 0.15s ease;
}

  .make-btn:hover {
    background: rgba(251, 209, 162, 0.15);
  }

  /* ── grid ── */
  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin-bottom: 1rem;
  }

  /* ── note ── */
  .note {
    background: var(--bg);
    color: var(--tc);
    border: none;
    border-radius: 6px;
    padding: 0.75rem;
    min-height: 100px;
    cursor: pointer;
    transform: rotate(var(--rot));
    position: relative;
    text-align: left;
    font-family: monospace;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    perspective: 600px;
    overflow: hidden;
  }

  .note:hover {
    transform: rotate(var(--rot)) scale(1.03);
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
  }

  .face {
    position: absolute;
    inset: 0;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transition: opacity 0.2s ease;
  }

  .back { opacity: 0; pointer-events: none; }
  .note.flipped .front { opacity: 0; pointer-events: none; }
  .note.flipped .back  { opacity: 1; pointer-events: auto; }

  .note-text {
    font-size: 0.7rem;
    line-height: 1.55;
    margin: 0;
    color: var(--tc);
  }

 

  .back-initial {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.1em;
    color: var(--tc);
  }

  /* ── shuffle ── */
  .shuffle-btn {
    display: block;
    margin: 0 auto;
    background: none;
    border: 1.5px solid #FBD1A2;
    color: #FBD1A2;
    font-family: monospace;
    font-size: 0.72rem;
    padding: 0.4rem 1.2rem;
    border-radius: 20px;
    cursor: pointer;
    letter-spacing: 0.05em;
    transition: background-color 0.15s ease, transform 0.1s ease;

  }

  .shuffle-btn:hover {
    background: rgba(251, 209, 162, 0.15);
  }

  /* ── modal overlay ── */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .modal {
    background: #BC4749;
    border: 2px solid #FBD1A2;
    box-shadow: 0 4px 0px 4px #FBD1A2;
    border-radius: 12px;
    padding: 1.5rem 1.2rem 1.2rem;
    width: min(90vw, 300px);
    height: min-content;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    position: relative;
    font-family: monospace;
  }

  .close-x {
    position: absolute;
    top: 0.6rem;
    right: 0.8rem;
    background: none;
    border: none;
    color: #FBD1A2;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
  }

  .modal-title {
    color: #FBD1A2;
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .note-input {
    background: #FBD1A2;
    border: none;
    border-radius: 6px;
    padding: 0.6rem 0.75rem;
    font-family: monospace;
    font-size: 0.8rem;
    color: #5a2d0c;
    resize: none;
    outline: none;
    line-height: 1.5;
  }

  .note-input::placeholder { color: #b07a4a; }

  .char-count {
    color: #FBD1A2;
    font-size: 0.65rem;
    text-align: right;
    margin-top: -0.4rem;
    opacity: 0.7;
  }

  .name-input {
    background: #FBD1A2;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
    font-family: monospace;
    font-size: 0.85rem;
    font-weight: 700;
    color: #5a2d0c;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }

  .name-input::placeholder {
    color: #b07a4a;
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
  }

  .error {
    color: #fff8e7;
    font-size: 0.72rem;
    margin: 0;
  }

 .submit-btn {
  background-color: #FBD1A2;
  color: #BC4749;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-family: monospace;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 0.05em;
  transition: background-color 0.15s ease, transform 0.1s ease;
}

  .submit-btn:hover {
    background: #f5b97a;
    transform: scale(1.02);
  }
</style>