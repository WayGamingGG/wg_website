# WayGaming eSports — Website

Site oficial da organização portuguesa de esports **WayGaming**, com presença competitiva em League of Legends e Valorant.

## Sobre o projeto

A WayGaming é uma organização de esports focada na excelência competitiva e no desenvolvimento de talento nacional. Este site é o ponto central de comunicação da organização: apresenta as equipas, jogadores, streamers, notícias, oportunidades de carreira e parceiros oficiais.

O site inclui ainda integração com a loja oficial de merchandise via UIN Sports e com o parceiro Instant Gaming.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Zustand (carrinho de compras)
- TanStack Query (fetching de dados Shopify)
- react-i18next (PT / EN)

## Arquitectura

- **Routing**: `HashRouter` — todas as rotas são hash-based (`/#/page`), compatível com GitHub Pages.
- **Estado**: Zustand gere o carrinho com persistência em `localStorage`.
- **Shopify**: integração via Storefront GraphQL API em `src/lib/shopify.ts`.
- **i18n**: traduções em `src/i18n/locales/pt.ts` e `src/i18n/locales/en.ts`.
- **Path alias**: `@/` aponta para `./src/`.

## Desenvolvimento local

Requisito: Node.js e npm instalados.

```sh
# Clonar o repositório
git clone <YOUR_GIT_URL>

# Entrar na pasta do projeto
cd wg_website

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento (porta 8080)
npm run dev
```

## Comandos disponíveis

```sh
npm run dev        # Servidor de desenvolvimento (porta 8080)
npm run build      # Build de produção (copia dist/index.html → dist/404.html)
npm run build:dev  # Build em modo desenvolvimento
npm run lint       # ESLint
npm run preview    # Pré-visualização do build de produção
npm run deploy     # Deploy para GitHub Pages via gh-pages
```

## Deploy

O deploy é feito automaticamente para **GitHub Pages** via GitHub Actions (`.github/workflows/static.yml`) a cada push para a branch `main`.
