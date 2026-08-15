export type Stage = {
  id: string;
  tag: string;
  title: string;
  sub: string;
  body: string;
  bullets: readonly string[];
  code: string;
  lang: string;
  milestone?: boolean;
};

export const stages = [
  {
    id: "index",
    tag: "01",
    lang: "html",
    title: "HTML",
    sub: "A base do projeto",
    body:
      "Tudo começa pela estrutura da página. Nesta etapa, você organiza o conteúdo em HTML e monta uma primeira versão estática da interface — ainda sem estilos ou interações.",
    bullets: [
      "Estrutura semântica",
      "Hierarquia de títulos (a11y)",
      "Conteúdo inicial",
      "Primeira versão estática",
    ],
    code: `<main class="library">
  <h1>Filmes populares</h1>
  <section class="grid">
    <article class="card">
      <img src="poster.jpg" alt="Blade Runner 2049" />
      <h2>Blade Runner 2049</h2>
      <p>2017 · Ficção Científica</p>
    </article>
  </section>
</main>`,
  },
  {
    id: "styles",
    tag: "02",
    lang: "css",
    title: "CSS",
    sub: "A interface ganha forma",
    body:
      "Agora a estrutura começa a virar uma interface de verdade. Nesta etapa, você define cores, tipografia, espaçamentos e layout para aproximar o projeto da referência visual escolhida.",
    bullets: [
      "Mobile-first layout",
      "Fluid grid & type scale",
      "Design Tokens (Variáveis CSS)",
      "Micro-interactions e hover",
    ],
    code: `.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.card:hover {
  transform: translateY(-6px);
}`,
  },
  {
    id: "script",
    tag: "03",
    lang: "js",
    title: "JavaScript",
    sub: "A página se torna viva",
    body:
      "A interface deixa de ser estática e passa a responder às ações do usuário. Os dados são renderizados com JavaScript, a busca funciona em tempo real, filtros e ordenação entram em cena e os favoritos podem ser salvos no localStorage.",
    bullets: [
      "Renderização via dados",
      "Busca em tempo real",
      "Filtros e ordenação",
      "Favoritos no localStorage",
    ],
    code: `const render = (items) =>
  grid.replaceChildren(...items.map(toCard));

search.addEventListener("input", ({ target }) => {
  const q = target.value.toLowerCase();
  render(movies.filter(movie =>
    movie.title.toLowerCase().includes(q)
  ));
});`,
  },
  {
    id: "api",
    tag: "04",
    lang: "js",
    title: "API Pública",
    sub: "Conexão com o mundo real",
    body:
      "Uma API pública pode conectar o projeto a dados externos. Nesta etapa, você pratica requisições assíncronas e aprende a lidar com carregamento, erros e respostas da API.",
    bullets: [
      "fetch + async/await",
      "Loading & error states",
      "Search & query parameters",
      "Pagination & data loading",
    ],
    code: `async function loadMovies(query {
  try {
    const res = await fetch(\`\${API}/search?q=\${query}\`);
    if (!res.ok) throw new Error();

    const data = await res.json();
    render(data);
  } catch { showError(); }
}`,
  },
  {
    id: "v1",
    tag: "★",
    lang: "txt",
    title: "Versão em JS",
    sub: "Um produto do zero ao deploy",
    milestone: true,
    body:
      "A primeira versão do produto está pronta. HTML, CSS e JavaScript se juntam em uma aplicação funcional, que você já pode publicar, compartilhar e continuar evoluindo.",
    bullets: [
      "Interface responsiva",
      "Interações funcionando",
      "Publicado e compartilhável",
      "Pronto para evoluir",
    ],
    code: `v1 — JavaScript

✓ HTML + CSS        ✓ interatividade
✓ responsividade    ✓ dados

→ versão publicada
→ pronta para compartilhar`,
  },
  {
    id: "App",
    tag: "05",
    lang: "jsx",
    title: "React",
    sub: "A mesma ideia, uma nova forma de pensar",
    body:
      "Com React, o mesmo projeto ganha uma nova estrutura baseada em componentes e estado, permitindo experimentar outra forma de organizar e construir a interface.",
    bullets: [
      "Components & props",
      "useState / useEffect",
      "Conditional rendering",
      "Component composition",
    ],
    code: `function MovieGrid({ query }) {
  const { data } = useMovies(query);
  return (
    <ul className="grid">
      {data.map(movie =>
        <MovieCard key={movie.id} {...movie} />
      )}
    </ul>
  );
}`,
  },
  {
    id: "v2",
    tag: "★",
    lang: "txt",
    title: "Versão em React",
    sub: "Duas versões, um mesmo produto",
    milestone: true,
    body:
      "Agora o mesmo produto existe em duas versões. Você pode comparar JavaScript e React lado a lado e mostrar no portfólio como o projeto evoluiu.",
    bullets: [
      "Duas implementações",
      "Mesmo produto e design",
      "Código para comparar",
      "Evolução no portfólio",
    ],
    code: `seugithub/
├─ cinema-vanilla  → v1 · publicada
└─ cinema-react    → v2 · publicada

✓ duas versões
→ prontas para compartilhar`,
  },
] satisfies readonly Stage[];
