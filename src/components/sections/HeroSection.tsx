import AboutDialog from "../AboutDialog";
import BrandLogo from "../BrandLogo";
import Reveal from "../Reveal";

export default function HeroSection() {
  const imagesBaseUrl = `${import.meta.env.BASE_URL}images/`;

  return (
    <header className="hero">
      <div aria-hidden className="hero-glow" />
      <div aria-hidden className="hero-grid" />

      <div className="hero-header container">
        <div className="brand">
          <BrandLogo />
          <span className="brand-name">Do Conceito ao Código</span>
        </div>
        <div className="hero-header-actions">
          <span className="hero-header-meta">Challenge · Turma 58 da Toti</span>
          <AboutDialog />
        </div>
      </div>

      <div className="hero-content container">
        <Reveal>
          <p className="eyebrow">Aprender na prática: do Zero ao React</p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero-title">
            Um produto, <span className="accent italic">duas</span> <br />
            implementações
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero-lead">
            Em vez de exercícios soltos, vamos criar{" "}
            <span className="text-strong">um produto real</span> desde o início
            do curso. Ele vai evoluir ao longo do curso — do HTML ao React —
            até se transformar em duas versões para o portfólio.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="hero-actions">
            <a
              href="#evolution"
              className="button button-primary focus-ring"
            >
              Como o projeto evolui
              <span className="button-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <p className="microcopy">5 etapas · 2 versões · 1 produto</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120} className="hero-media container">
        <figure className="hero-media-figure floaty">
          <div aria-hidden="true" className="hero-media-halo" />
          <div className="browser-frame browser-frame-preview">
            <div className="browser-frame-toolbar">
              <div className="browser-frame-window-dots">
                <span className="browser-frame-window-dot" />
                <span className="browser-frame-window-dot" />
                <span className="browser-frame-window-dot" />
              </div>
              <span className="browser-frame-label">
                cinema-library · figma preview
              </span>
              <span className="browser-frame-spacer" />
            </div>
            <img
              src={`${imagesBaseUrl}figma-preview.webp`}
              srcSet={`${imagesBaseUrl}figma-preview-740.webp 740w, ${imagesBaseUrl}figma-preview.webp 1312w`}
              sizes="(min-width: 1152px) 1104px, (min-width: 768px) calc(100vw - 3rem), calc(100vw - 2.5rem)"
              width="1312"
              height="816"
              alt="Prévia do design no Figma de um aplicativo de catálogo de filmes com busca, filtros e grade de cartazes"
              className="hero-media-image"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <img
            src={`${imagesBaseUrl}mobile-preview.webp`}
            width="768"
            height="1376"
            alt="Versão mobile do mesmo design"
            className="hero-media-mobile"
            loading="lazy"
          />
          <figcaption className="hero-media-caption">
            Este é o objetivo final. Mantenha esta referência visual em mente
            para guiar a evolução do seu projeto do início ao fim.
          </figcaption>
        </figure>
      </Reveal>
    </header>
  );
}
