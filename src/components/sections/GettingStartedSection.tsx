import { links } from "../../config/links";
import Reveal from "../Reveal";

const gettingStartedSteps = [
  {
    number: "01",
    title: "Escolha o ponto de partida",
    text: "Um tema e uma referência visual bastam para começar.",
    className: "getting-started-step-first",
  },
  {
    number: "02",
    title: "Comece com o que já sabe",
    text: "Construa a primeira versão com os recursos que você já conhece.",
    className: "getting-started-step-middle",
  },
  {
    number: "03",
    title: "Deixe novas ideias para depois",
    text: "Anote novas ideias e volte a elas conforme aprender novos recursos.",
    className: "getting-started-step-last",
  },
] as const;

const completionCriteria = [
  "Funciona",
  "Usa dados reais",
  "É responsiva",
  "Está publicada",
] as const;

export default function GettingStartedSection() {
  return (
    <section className="section getting-started">
      <div className="container">
        <Reveal>
          <div>
            <p className="eyebrow">Primeiros passos</p>

            <h2 className="section-title">Pronto para começar?</h2>

            <p className="section-intro">
              Não é preciso decidir tudo no início. O projeto pode crescer aos
              poucos, acompanhando o que aparece no curso.
            </p>
          </div>
        </Reveal>

        <Reveal
          as="ol"
          className="getting-started-steps getting-started-steps-reveal"
        >
          {gettingStartedSteps.map((step) => (
            <li
              key={step.number}
              className={`getting-started-step ${step.className}`}
            >
              <div className="getting-started-step-layout">
                <span className="getting-started-step-number">
                  {step.number}
                </span>

                <div className="getting-started-step-copy">
                  <h3 className="getting-started-step-title">{step.title}</h3>

                  <p className="getting-started-step-text">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="project-example">
          <div className="project-example-content">
            <p className="kicker">Na prática</p>

            <h3 className="project-example-title">
              Um exemplo para tirar a ideia do papel
            </h3>

            <p className="project-example-text">
              O <span className="text-strong">Liveler</span> mostra uma forma
              possível de começar: uma referência visual, dados iniciais em
              JSON e um README com os primeiros passos. O tema, o layout e as
              funcionalidades podem ser adaptados livremente.
            </p>

            <a
              href={links.livelerRepository}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary project-example-button focus-ring"
            >
              Ver repositório
              <span className="button-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          <div className="project-example-code browser-frame">
            <div className="browser-frame-toolbar">
              <span className="browser-frame-window-dot" />
              <span className="browser-frame-window-dot" />
              <span className="browser-frame-window-dot" />

              <span className="browser-frame-file-label">liveler/</span>
            </div>

            <pre className="project-example-code-block project-example-tree">
              <code>{`liveler/
├── assets/
│   └── layout.png        # Layout da página
├── data/
│   └── books.json        # Dados dos livros
├── index.html            # HTML da página
└── README.md             # Instruções do projeto`}</code>
            </pre>
          </div>
        </Reveal>

        <Reveal>
          <div className="getting-started-done">
            <p className="microcopy">Uma versão está pronta quando:</p>

            <ul className="getting-started-check-list">
              {completionCriteria.map((item) => (
                <li key={item} className="getting-started-check-chip">
                  <span aria-hidden="true" className="accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
