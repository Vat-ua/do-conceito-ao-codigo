import Reveal from "../Reveal";
import Stages from "../Stages";

export default function EvolutionSection() {
  return (
    <section id="evolution" className="section evolution">
      <div className="evolution-header container">
        <Reveal>
          <p className="eyebrow">A evolução</p>
          <h2 className="section-title">
            O mesmo projeto.
            <br />
            Evoluindo a cada etapa
          </h2>
          <p className="section-lead">
            O projeto ganha duas implementações: primeiro com JavaScript puro,
            para entender a base, e depois com React, reorganizando a interface
            em componentes e estados.{" "}
            <span className="text-strong">
              Mesmos tema e design, duas formas de construir a aplicação.
            </span>
          </p>
          <div className="evolution-note">
            <p className="evolution-note-label">
              Nota
            </p>
            <p className="evolution-note-text">
              Este percurso é apenas uma referência. Na prática, as etapas
              se misturam: você pode avançar, voltar e experimentar
              conforme o projeto evolui.
            </p>
          </div>
        </Reveal>
      </div>
      <Stages />
    </section>
  );
}
