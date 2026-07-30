import Translator from "./components/Translator";
import "./index.css";

export default function App() {
  return (
    <main class="w-full max-w-[680px]">
      <header class="text-center mb-8">
        <h1 class="text-[1.75rem] font-bold tracking-tight bg-gradient-to-br from-violet-400 to-blue-400 bg-clip-text text-transparent">
          Omkegas Translate
        </h1>
        <p class="text-zinc-400 text-[0.925rem] mt-1.5">
          Maaf kalau masih kurang, dibuat seadanya aja
        </p>
      </header>
      <Translator />
    </main>
  );
}
