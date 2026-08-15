import Reveal from "../Reveal";

export default function ChoiceSection() {
  return (
    <section className="section section-no-border choice container">
      <div className="choice-layout">
        <Reveal>
          <h2 className="section-title">
            Tudo começa
            <br />
            com duas decisões
          </h2>
          <p className="section-intro section-intro-compact">
            A partir daí, o projeto cresce junto com o curso: cada novo conteúdo
            entra no mesmo produto.
          </p>
        </Reveal>

        <div>
          <div className="choice-list">
            <Reveal delay={80}>
              <span className="kicker">O Tema</span>
              <h3 className="choice-title">Algo que você goste</h3>
              <p className="choice-text">
                Escolha um tema que não sai da sua cabeça. Livros, filmes,
                receitas ou jogos - o assunto tanto faz. O importante é que
                permita trabalhar com uma coleção de dados para pesquisar,
                filtrar e explorar.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <span className="kicker">O visual</span>
              <h3 className="choice-title">Um layout que te inspire</h3>
              <p className="choice-text">
                Escolha ou crie um layout que dê vontade de construir e voltar
                ao projeto ao longo do curso. Ele ajuda a dar identidade ao que
                está sendo criado e serve como referência visual, sem precisar
                ser seguido à risca.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
