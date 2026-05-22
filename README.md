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

---

## Sistema de Notícias (API + Bot Discord)

A secção de notícias do site pode ser alimentada em tempo real via um bot do Discord.

### Estrutura

```
/api   — Express API (Node.js) que guarda os últimos 3 anúncios em news.json
/bot   — Bot Discord que escuta o canal #anuncios-site e publica na API
```

### Setup

**1. Variáveis de ambiente**

Copia `.env.example` para `.env` e preenche os valores:

```sh
cp .env.example .env
```

| Variável | Descrição |
|---|---|
| `DISCORD_TOKEN` | Token do bot (Discord Developer Portal) |
| `CHANNEL_ID` | ID do canal `#anuncios-site` |
| `API_URL` | URL da API (bot → API), ex: `http://localhost:3001` |
| `VITE_API_URL` | URL da API (React → API), ex: `http://localhost:3001` |

**2. Instalar dependências dos serviços**

```sh
cd api && npm install && cd ..
cd bot && npm install && cd ..
```

**3. Instalar concurrently (root)**

```sh
npm install
```

**4. Iniciar API e Bot em simultâneo**

```sh
npm run services
```

Ou separadamente:

```sh
npm run api   # API na porta 3001
npm run bot   # Bot Discord
```

### Uso no Discord

No canal `#anuncios-site`, escreve:

```
!news Título do anúncio | Conteúdo do anúncio
```

Podes anexar uma imagem à mensagem — ela será exibida no card do site.

O site atualiza automaticamente a cada 60 segundos. Enquanto a API não tiver anúncios, são exibidos os itens estáticos de fallback.
