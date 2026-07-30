function countStats(str: string) {
  const words = str.trim().split(/\s+/).filter(Boolean).length;
  const chars = str.length;
  return { words, chars };
}

export default function Counter(props: { text: () => string }) {
  const stats = () => countStats(props.text());
  return (
    <span class="counter">
      {stats().words} kata &bull; {stats().chars} karakter
    </span>
  );
}
