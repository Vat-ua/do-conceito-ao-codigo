import { links } from "../../config/links";
import Reveal from "../Reveal";

export default function ClosingSection() {
  return (
    <section className="closing">
      <div aria-hidden className="closing-glow" />
      <div className="closing-content">
        <Reveal>
          <p className="closing-title">
            Ao final, você não terá{" "}
            <span className="text-subtle">apenas código.</span> Você terá um
            produto real{" "}
            <span className="accent italic">feito para ter orgulho</span>
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="closing-text">
            Escolha seu tema. Escolha seu layout. Comece com uma simples{" "}
            <code className="closing-inline-code">&lt;section&gt;</code> e vá em
            frente.
          </p>
        </Reveal>
        <Reveal delay={250}>
          <div className="closing-community">
            <p className="kicker">Quer fazer junto?</p>

            <p className="closing-community-text">
              Explore o Liveler como ponto de partida e adapte a proposta ao seu próprio projeto.
            </p>

            <div className="closing-community-actions">
              <a
                href={links.livelerRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary closing-community-button focus-ring"
              >
                Explorar o Liveler
                <span className="button-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
