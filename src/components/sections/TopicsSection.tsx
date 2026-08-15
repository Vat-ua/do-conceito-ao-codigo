import { useState } from "react";

const topics = [
  "Livros favoritos",
  "Jogos marcantes",
  "Filmes e séries",
  "Receitas do mundo",
  "Países e capitais",
  "Músicas e álbuns",
  "Times de futebol",
  "Cidades históricas",
] as const;

export default function TopicsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const controlLabel = isPaused
    ? "Retomar animação dos temas"
    : "Pausar animação dos temas";

  return (
    <section
      aria-label="Possíveis temas"
      className="topics"
      data-paused={isPaused ? "true" : undefined}
    >
      <div className="topics-viewport">
        <div className="topics-track">
          {[...topics, ...topics].map((topic, index) => (
            <span
              key={`${topic}-${index}`}
              className="topics-item"
              aria-hidden={index >= topics.length ? "true" : undefined}
            >
              <span>{topic}</span>
              <span className="topics-separator" aria-hidden="true">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="topics-control focus-ring"
        aria-label={controlLabel}
        title={controlLabel}
        onClick={() => setIsPaused((paused) => !paused)}
      >
        <svg
          className="topics-control-icon"
          aria-hidden="true"
          viewBox="0 0 20 20"
        >
          {isPaused ? (
            <path d="M7 5.5 14 10l-7 4.5z" />
          ) : (
            <path d="M6.75 5.5v9M13.25 5.5v9" />
          )}
        </svg>
      </button>
    </section>
  );
}
