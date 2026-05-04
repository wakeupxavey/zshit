const words = [
  "HIMBO", "BINGCHILLIN", "BOUJEE", "SLAY", "LOWKEY",
  "HIGHKEY", "BOOF", "BASIC", "MID", "GOOFYAHH",
  "FADED", "GOON", "DRIP", "CRINGE", "HOPECORE",
  "CHAT", "CHOPPED", "AURA", "COOKED", "BUSSIN",
  "GIGACHAD", "LOOKSMAXX", "MOGGING", "PERIOD", "RIZZLER",
  "SALTY", "SAVAGE", "SHADE", "SMOKE", "SNATCHED",
  "SUS", "TWEAKING", "DEADASS", "GLAZING", "OHIO",
  "POGGERS", "ZESTY", "SIX-SEVEN", "GOATED", "OOF",
  "BASED", "FAAAAAAAAAAAAA", "GLIZZY", "JOEVER", "SHEESH",
  "SLAPS", "WASHED", "ZAZA"
];

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}