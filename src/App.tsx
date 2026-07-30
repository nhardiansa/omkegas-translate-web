import Translator from "./components/Translator";
import "./App.css";

export default function App() {
  return (
    <main class="app">
      <header class="header">
        <h1 class="title">Omkegas Translate</h1>
        <p class="subtitle">Ubah teks normal jadi plesetan &ldquo;om&rdquo;</p>
      </header>
      <Translator />
    </main>
  );
}
