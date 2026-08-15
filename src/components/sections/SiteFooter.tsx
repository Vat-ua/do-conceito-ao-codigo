import BrandLogo from "../BrandLogo";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <div className="brand brand-muted">
              <BrandLogo />
              <span className="brand-name">Do Conceito ao Código</span>
            </div>
            <p className="footer-description">
              Um tema. Um layout. Um projeto levado do início ao fim para
              praticar durante o aprendizado Front End.
            </p>
          </div>

          <div className="footer-columns">
            <div>
              <span className="footer-heading">Tecnologias</span>
              <ul className="footer-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>API pública</li>
                <li>React</li>
              </ul>
            </div>

            <div>
              <span className="footer-heading">Qualquer tema</span>
              <ul className="footer-list">
                <li className="footer-theme-item">
                  <span className="accent">❦</span> Livros
                </li>
                <li className="footer-theme-item">
                  <span className="accent">✦</span> Filmes
                </li>
                <li className="footer-theme-item">
                  <span className="accent">❋</span> Receitas
                </li>
                <li className="footer-theme-item">
                  <span className="accent">◆</span> Jogos
                </li>
                <li className="footer-theme-item">
                  <span className="accent">✺</span> Lugares
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-tagline">Ideias que merecem ser recriadas</div>
          <div>Um produto · Duas implementações · 2026</div>
        </div>
      </div>
    </footer>
  );
}
