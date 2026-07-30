import { createSignal } from "solid-js";
import { translate } from "../lib/translate";
import Counter from "./Counter";

export default function Translator() {
  const [input, setInput] = createSignal("");
  const [copied, setCopied] = createSignal(false);

  const output = () => translate(input());

  const handleCopy = () => {
    navigator.clipboard.writeText(output());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => setInput("");

  return (
    <div class="translator">
      <div class="panel">
        <textarea
          class="input-area"
          placeholder="Ketik teks normal di sini..."
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
          spellcheck={false}
        />
        <div class="panel-footer">
          <Counter text={input} />
          <button class="btn btn-clear" onClick={handleClear} disabled={!input()}>
            Clear
          </button>
        </div>
      </div>

      <div class="panel">
        <div class="output-area">{output()}</div>
        <div class="panel-footer">
          <Counter text={output} />
          <button class="btn btn-copy" onClick={handleCopy} disabled={!output()}>
            {copied() ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
