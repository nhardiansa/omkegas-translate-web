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
    <div class="flex flex-col gap-4">
      <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-colors focus-within:border-violet-400 focus-within:ring-[3px] focus-within:ring-violet-400/15">
        <textarea
          class="w-full min-h-[140px] p-4 bg-transparent border-none outline-none text-zinc-100 text-[0.95rem] leading-relaxed resize-y placeholder:text-zinc-500/50"
          placeholder="Ketik teks normal di sini..."
          value={input()}
          onInput={(e) => setInput(e.currentTarget.value)}
          spellcheck={false}
        />
        <div class="flex items-center justify-between px-4 py-2 border-t border-zinc-800 bg-white/[0.015]">
          <Counter text={input} />
          <button
            class="px-3.5 py-1.5 border border-zinc-800 rounded-md text-xs font-medium transition cursor-pointer disabled:opacity-35 disabled:cursor-default hover:not-disabled:border-red-500 hover:not-disabled:text-red-300 hover:not-disabled:bg-white/6 active:not-disabled:bg-white/10"
            onClick={handleClear}
            disabled={!input()}
          >
            Clear
          </button>
        </div>
      </div>

      <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div class="min-h-[80px] p-4 text-[0.95rem] leading-relaxed text-zinc-100 whitespace-pre-wrap break-words empty:after:content-['Hasil_plesetan_muncul_di_sini...'] empty:after:text-zinc-500/50">
          {output()}
        </div>
        <div class="flex items-center justify-between px-4 py-2 border-t border-zinc-800 bg-white/[0.015]">
          <Counter text={output} />
          <button
            class="min-w-[64px] px-3.5 py-1.5 border border-zinc-800 rounded-md text-xs font-medium transition cursor-pointer disabled:opacity-35 disabled:cursor-default hover:not-disabled:border-violet-400 hover:not-disabled:text-violet-400 hover:not-disabled:bg-white/6 active:not-disabled:bg-white/10"
            onClick={handleCopy}
            disabled={!output()}
          >
            {copied() ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
