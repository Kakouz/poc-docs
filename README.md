# CIEE — Portal de APIs de Integração

Prova de conceito (POC) para validar o uso do [Docusaurus](https://docusaurus.io/)
na publicação do catálogo oficial de APIs do CIEE para contratação e gestão de
estagiários e aprendizes.

Esta versão foi reduzida ao mínimo para validar a identidade visual corporativa, a
navegação e o fluxo de publicação no GitHub Pages antes de adicionar o conteúdo
definitivo.

## O que tem no site

- Página inicial com hero corporativo e cards de público/uso.
- **Geral (Comum)**: introdução e autenticação via `POST /auth/login/integracao`.
- **Grupo Assobes**: 9 rotas do fluxo de contratação, do cadastro à rescisão.
- **Itaú (Escopo Estendido)**: as mesmas 9 rotas do Assobes, acrescidas de
  prorrogação com alteração de supervisor e de dados do contrato.
- **Clientes** (`/docs/clientes/visao-por-cliente`): página de entrada
  segmentada por conta integrada.

O blog, os tutoriais e as páginas de exemplo do template original foram removidos.

### Identidade visual

As cores oficiais estão centralizadas em `src/css/custom.css`:

- Azul CIEE: `#004797`
- Laranja CIEE: `#F37021`

Os temas claro e escuro usam variações próprias para manter contraste e
legibilidade.

## Requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm

## Como rodar localmente

```bash
npm install
npm run start
```

O site abre em `http://localhost:3000/poc-docs/`. As alterações em `docs/` e
`src/` são recarregadas automaticamente.

## Build de produção

```bash
npm run build
```

O resultado fica na pasta `build/`. Para servir o build localmente:

```bash
npm run serve
```

## Estrutura do projeto

```text
.
├── docs/                  # Conteúdo da documentação (Markdown/MDX)
│   ├── geral/             # Introdução e autenticação
│   ├── assobes/           # Rotas do Grupo Assobes
│   ├── itau/              # Rotas do Itaú (escopo estendido)
│   └── clientes/          # Visão segmentada por cliente
├── src/
│   ├── css/custom.css     # Tema e variáveis de estilo
│   └── pages/index.tsx    # Página inicial
├── templates-docs/        # Template de endpoint e plano de automação
├── static/                # Arquivos estáticos (imagens, .nojekyll)
├── docusaurus.config.ts   # Configuração do site (URL, navbar, rodapé...)
├── sidebars.ts            # Menu lateral explícito do portal
└── .github/workflows/     # Deploy automático no GitHub Pages
```

## Templates e automação

A pasta [`templates-docs/`](templates-docs/) concentra o material de evolução do
catálogo:

- [`template-endpoint.mdx`](templates-docs/template-endpoint.mdx) — modelo padrão
  de uma página de endpoint.
- [`README-AUTOMACAO.md`](templates-docs/README-AUTOMACAO.md) — visão para
  gestão/PO com as abordagens manual e automatizada, comparativo, riscos e
  roadmap.

O template fica fora de `docs/` de propósito e não é publicado no portal.

## Deploy no GitHub Pages

O deploy é feito automaticamente pelo GitHub Actions a cada push na branch
`main`, pelo workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Configuração necessária (apenas uma vez, no GitHub):

1. Acesse **Settings → Pages** no repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Faça push na branch `main` ou rode o workflow manualmente em
   **Actions → Deploy no GitHub Pages → Run workflow**.

O site ficará disponível em:

```text
https://kakouz.github.io/poc-docs/
```

### Configuração de URL

As configurações de publicação ficam em `docusaurus.config.ts`:

```ts
url: 'https://kakouz.github.io',
baseUrl: '/poc-docs/',
organizationName: 'Kakouz',
projectName: 'poc-docs',
```

Se o repositório ou a organização mudarem, atualize esses campos (e os links do
GitHub na navbar/rodapé).

### Alternativa: deploy manual

Também é possível publicar usando o script do Docusaurus (requer credenciais
locais do Git):

```bash
GIT_USER=Kakouz npm run deploy
```

Esse comando gera o build e envia para a branch `gh-pages`. Com o workflow do
GitHub Actions configurado, esse passo não é necessário.

## Adicionando novas APIs

1. Crie um arquivo `.md` ou `.mdx` em `docs/apis/`.
2. Adicione o front matter com `title` e `sidebar_position`.
3. Rode `npm run start` para conferir o resultado.
4. Abra um pull request.

A sidebar é gerada automaticamente pela estrutura de pastas (`sidebars.ts`).
