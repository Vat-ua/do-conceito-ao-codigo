import type { ReactNode } from "react";
import Reveal from "../Reveal";

type ApiLinkProps = {
  href: string;
  children: ReactNode;
};

function ApiLink({ href, children }: ApiLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="faq-api-link"
    >
      {children}
    </a>
  );
}

type FaqItemProps = {
  question: string;
  children: ReactNode;
};

function FaqItem({ question, children }: FaqItemProps) {
  return (
    <details className="faq-item">
      <summary className="faq-summary focus-ring">
        <span className="faq-question">{question}</span>

        <span aria-hidden="true" className="faq-icon">
          <span className="faq-icon-line faq-icon-line-horizontal" />
          <span className="faq-icon-line faq-icon-line-vertical" />
        </span>
      </summary>

      <div className="faq-answer">{children}</div>
    </details>
  );
}

export default function FaqSection() {
  return (
    <section className="section faq">
      <div className="container">
        <div className="faq-layout">
          <Reveal>
            <div className="faq-intro">
              <h2 className="section-title faq-title">
                Algumas respostas práticas
              </h2>

              <p className="section-intro section-intro-compact">
                O projeto não precisa nascer pronto. Estas respostas ajudam a
                definir um bom ponto de partida e deixar espaço para ele evoluir
                junto com você.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140} className="faq-list">
            <FaqItem question="Como escolher uma boa ideia para o projeto?">
              <p>
                Escolha um tema de que você goste e que permita trabalhar com
                vários itens. Podem ser livros, filmes, receitas, jogos, lugares
                ou o que fizer sentido para você. O importante é que o projeto
                permita adicionar recursos como busca, filtros ou favoritos.
                Assim, você terá bastante espaço para praticar JavaScript e
                evoluir o projeto ao longo do curso.
              </p>
            </FaqItem>

            <FaqItem question="Preciso definir todas as funcionalidades antes de começar?">
              <p>
                Não. Comece com o que você já sabe e deixe o projeto crescer
                junto com o curso. Novas funcionalidades podem ser adicionadas
                aos poucos, conforme você aprende novos conteúdos ou tem novas
                ideias.
              </p>
            </FaqItem>

            <FaqItem question="Preciso usar uma API desde o início?">
              <p>
                Não. No início, os dados podem estar diretamente no HTML ou em
                um arquivo JSON local. Uma API pode ser adicionada depois,
                quando você quiser praticar requisições assíncronas e trabalhar
                com dados externos.
              </p>
            </FaqItem>

            <FaqItem question="De onde pode vir o layout?">
              <p>
                Você pode criar seu próprio layout, usar ou adaptar um layout
                existente ou usar IA para desenvolver uma proposta visual. O
                importante é ter uma referência que ajude a orientar o
                desenvolvimento do projeto.
              </p>

              <p className="faq-spaced-paragraph">
                Ferramentas como <strong className="text-emphasis">v0</strong>,{" "}
                <strong className="text-emphasis">Bolt</strong>,{" "}
                <strong className="text-emphasis">Lovable</strong>,{" "}
                <strong className="text-emphasis">Claude</strong> ou{" "}
                <strong className="text-emphasis">GPT</strong> podem ajudar a
                criar ou explorar diferentes propostas visuais.
              </p>
            </FaqItem>

            <FaqItem question="Por que criar versões em JavaScript e React?">
              <p>
                Fazer o mesmo projeto de duas formas ajuda a perceber, na
                prática, o que muda entre elas. Primeiro, você constrói a
                aplicação com JavaScript puro e trabalha diretamente com o DOM.
                Depois, recria o mesmo projeto em React usando componentes,
                props e estado.
              </p>

              <p className="faq-spaced-paragraph">
                Como a ideia e o design são os mesmos, fica mais fácil perceber
                o que React muda na forma de organizar e construir a interface.
              </p>
            </FaqItem>

            <FaqItem question="Quais APIs públicas posso usar?">
              <p>
                Se uma API fizer sentido para o seu projeto, estas são algumas
                opções para explorar:
              </p>

              <p className="faq-spaced-paragraph">
                <ApiLink href="https://restcountries.com/">
                  REST Countries
                </ApiLink>
                {" — países e informações geográficas;"}
                <br />
                <ApiLink href="https://openlibrary.org/">
                  Open Library
                </ApiLink>
                {" — livros e autores;"}
                <br />
                <ApiLink href="https://pokeapi.co/">PokéAPI</ApiLink>
                {" — Pokémon;"}
                <br />
                <ApiLink href="https://jikan.moe/">Jikan</ApiLink>
                {" — animes e mangás;"}
                <br />
                <ApiLink href="https://rickandmortyapi.com/">
                  Rick and Morty API
                </ApiLink>
                {" — personagens e episódios;"}
                <br />
                <ApiLink href="https://www.themealdb.com/">TheMealDB</ApiLink>
                {" — receitas;"}
                <br />
                <ApiLink href="https://dummyjson.com/">DummyJSON</ApiLink>
                {" — produtos e outros dados de exemplo."}
              </p>

              <p className="faq-spaced-paragraph">
                Você também pode trabalhar apenas com um arquivo JSON local.
              </p>
            </FaqItem>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
