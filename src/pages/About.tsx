import { useEffect, useState } from "react";
import { getVersion } from "@tauri-apps/api/app";
import { open } from "@tauri-apps/plugin-shell";
import mcpdeckAnimated from "../assets/mcpdeck-animated.svg";
import { trackUrl } from "../lib/utils";
import { isTauriRuntime } from "../lib/runtime";

const GITHUB = "https://github.com/codewithevilxd/mcpdeck";
const PORTFOLIO = "https://nishantdev.space";
const X_URL = "https://x.com/raj_dev_";
const EMAIL = "mailto:codewithevilxd@gmail.com";

function About() {
  const [version, setVersion] = useState("");
  const [bubbleVisible, setBubbleVisible] = useState(false);

  useEffect(() => {
    if (isTauriRuntime()) {
      getVersion().then(setVersion).catch(() => {});
    }
    const t = setTimeout(() => setBubbleVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const openLink = (url: string) => {
    if (!isTauriRuntime()) return;
    open(trackUrl(url));
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-full max-w-[480px] space-y-5">

        <div className="flex flex-col items-center gap-3 text-center">

          <div className="relative">
            <img src={mcpdeckAnimated} alt="MCPDeck" className="h-24 w-auto object-contain" />

            <div
              className={`absolute left-full top-1/2 -translate-y-1/2 ml-4 transition-all duration-500 ease-out ${
                bubbleVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 -translate-x-3 scale-95 pointer-events-none"
              }`}
            >
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[8px] border-y-transparent border-r-[12px] border-r-primary/50" />
              <button
                onClick={() => openLink(`${GITHUB}/stargazers`)}
                className="flex items-center gap-3 bg-surface border border-primary/50 rounded-xl px-4 py-3 shadow-lg hover:border-primary hover:bg-surface-hover transition-colors text-left whitespace-nowrap"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <div>
                  <p className="text-xs font-semibold text-text leading-tight">Star on GitHub</p>
                  <p className="text-[10px] text-text-muted leading-tight mt-0.5">Enjoying MCPDeck? A star helps a lot</p>
                </div>
              </button>
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            <span className="text-primary">MCP</span>
            <span className="text-text">Deck</span>
          </h1>
          {version && (
            <span className="inline-block rounded-full bg-surface-overlay px-3 py-1 text-xs font-medium text-text-muted border border-border-hover">
              v{version}
            </span>
          )}
          <p className="text-text-muted text-sm">Full visibility for your MCP ecosystem</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-text-muted">
          <button type="button" onClick={() => openLink(PORTFOLIO)} className="hover:text-primary transition-colors">
            Portfolio
          </button>
          <span className="text-border">·</span>
          <button type="button" onClick={() => openLink(GITHUB)} className="hover:text-primary transition-colors">
            GitHub
          </button>
          <span className="text-border">·</span>
          <button type="button" onClick={() => openLink(X_URL)} className="hover:text-primary transition-colors">
            X
          </button>
          <span className="text-border">·</span>
          <button type="button" onClick={() => openLink(EMAIL)} className="hover:text-primary transition-colors">
            Email
          </button>
          <span className="text-border">·</span>
          <button
            type="button"
            onClick={() => openLink(`${GITHUB}/issues`)}
            className="hover:text-primary transition-colors"
          >
            Report issue
          </button>
          <span className="text-border">·</span>
          <button
            type="button"
            onClick={() => openLink("https://opensource.org/licenses/MIT")}
            className="hover:text-primary transition-colors"
          >
            License: MIT
          </button>
        </div>

        <p className="text-[11px] text-text-muted text-center">
          Discord: <span className="text-text font-mono">raj.dev_</span>
        </p>

      </div>
    </div>
  );
}

export default About;
