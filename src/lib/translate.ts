const ELIGIBLE = new Set(["b", "d", "g", "k", "l", "n", "s"]);

function isConsonant(ch: string): boolean {
  return /^[a-zA-Z]$/.test(ch) && !"aeiouAEIOU".includes(ch);
}

function transformWord(word: string): string {
  if (word.length < 2) return word;

  const start = isConsonant(word[0]) ? 1 : 0;

  for (let i = start; i < word.length; i++) {
    if (ELIGIBLE.has(word[i].toLowerCase())) {
      const m = word[i] === word[i].toUpperCase() ? "M" : "m";
      return word.slice(0, i) + m + word.slice(i);
    }
  }

  return word;
}

export function translate(text: string): string {
  return text.replace(/[a-zA-Z]+/g, transformWord);
}
