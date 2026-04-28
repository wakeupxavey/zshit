const words = [
  "BASKET", "BOUNCE", "DRIBBLE", "COURT", "TROPHY",
  "CHAMPION", "JERSEY", "REBOUND", "TIMEOUT", "PLAYOFF",
  "DEFENSE", "OFFENSE", "BUZZER", "ASSIST", "BLOCKED",
  "SEASON", "ROSTER", "COACH", "ARENA", "FINALS"
];

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}