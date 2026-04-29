Faz uma auditoria de performance e SEO focada nas áreas críticas para este site de esports. Analisa o código atual em `src/` e produz um relatório estruturado com problemas encontrados e correções concretas.

---

## 1. Performance de Imagens

Verifica todos os ficheiros em `src/` que renderizam imagens (`<img`, `background-image`, URLs de imagem).

Para cada imagem encontrada, verifica:

- `<img>` sem `loading="lazy"` (obrigatório para imagens below-the-fold: cards de jogadores, logos de parceiros, thumbnails)
- `<img>` sem `decoding="async"`
- `<img>` sem atributos `width` e `height` explícitos (causa layout shift — CLS)
- `<img>` sem `srcSet` ou `sizes` para imagens responsivas
- URLs de imagem hardcoded que apontam para formatos pesados (`.png`, `.jpg`) em vez de `.webp`
- Imagens hero ou above-the-fold que NÃO devem ter `loading="lazy"` (evitar LCP lento)
- `background-image` em CSS inline sem fallback ou tamanho controlado
- Componentes de card (PlayerCard, StaffCard, ProductCard) — verificar se têm `object-fit: cover`, `aspect-ratio` fixo, e lazy loading correto

Para cada problema, indica: ficheiro, linha, problema, e a correção exata com código.

---

## 2. Re-renders Desnecessários

Verifica componentes que atualizam com frequência ou têm listas de dados dinâmicos:

Ficheiros prioritários a analisar:
- `src/components/wg-colosseum/WGSchedule.tsx`
- `src/components/wg-colosseum/WGStandings.tsx`
- `src/components/wg-colosseum/WGSchedulePreview.tsx`
- `src/components/wg-colosseum/WGStandingsPreview.tsx`
- `src/components/store/ProductCard.tsx`
- `src/components/store/CartDrawer.tsx`
- `src/stores/cartStore.ts`

Para cada ficheiro, verifica:

- Componentes que recebem callbacks sem `useCallback` — causa re-render em cada render do pai
- Objetos/arrays criados inline em JSX sem `useMemo` — nova referência em cada render
- Subscrições ao store Zustand que selecionam estado a mais (`useCartStore()` completo vs. seletor específico `useCartStore(state => state.items)`)
- Componentes de lista (`.map()`) sem `key` estável (usar ID real, nunca index)
- Componentes que deveriam ser `React.memo` (recebem as mesmas props maioritariamente mas re-renderizam por causa do pai)
- `useEffect` com dependências em falta ou a mais no array

Classifica cada problema como: **CRÍTICO** (causa re-render em cascata) | **MÉDIO** (desperdício mensurável) | **BAIXO** (otimização preventiva).

---

## 3. Bundle Size

Analisa `package.json` e os imports no código.

**Dependências:**
- Lista todas as dependências de animação/UI instaladas (framer-motion, gsap, anime.js, three.js, etc.) e verifica se estão realmente a ser usadas em `src/`
- Identifica bibliotecas com alternativas mais leves (ex: `date-fns` completo vs. imports individuais, `lodash` completo vs. `lodash-es`)
- Verifica se `lucide-react` está a ser importado corretamente (named imports individuais, não import *)

**Tree-shaking:**
- Procura imports que impedem tree-shaking:
  ```typescript
  import _ from 'lodash'           // BAD
  import { debounce } from 'lodash' // BETTER
  ```
- Verifica imports de shadcn/ui — devem ser sempre named imports do componente específico
- Procura `import * as X from` desnecessários

**Code splitting:**
- Verifica se as páginas em `src/pages/` usam `React.lazy()` + `Suspense` no `App.tsx`
- Identifica componentes pesados (ex: `WGColosseum`, `Store`, `ProductDetail`) que deveriam ser carregados lazily
- Verifica se existe algum `vite.config.ts` com `rollupOptions.output.manualChunks` para separar vendor chunks

Para cada problema, estima o impacto em KB e sugere a solução com código.

---

## 4. SEO Básico

Verifica cada ficheiro em `src/pages/` e `src/components/wg-colosseum/WG*.tsx` que seja uma view principal.

Para cada página, verifica:

**Metadata obrigatória (react-helmet-async):**
- `<title>` único e descritivo (inclui nome do team + contexto)
- `<meta name="description">` entre 120-160 caracteres
- `<meta property="og:title">`, `og:description>`, `og:image>`, `og:url>`
- `<meta name="twitter:card">`, `twitter:title>`, `twitter:image>`
- `<link rel="canonical">` para evitar conteúdo duplicado

**Estrutura semântica:**
- Cada página tem exatamente um `<h1>` (não zero, não dois)
- Hierarquia correta de headings: h1 → h2 → h3 (sem saltar)
- Imagens com `alt` descritivo (não vazio, não genérico como "image")
- Links com texto descritivo (não "clique aqui" ou "ver mais" sem contexto)

**Performance SEO (Core Web Vitals):**
- LCP: a imagem hero (HeroSection, TeamHeader) tem `loading="eager"` e `fetchpriority="high"`?
- CLS: imagens com dimensões explícitas para evitar layout shift?
- Rotas WG Colosseum (`/wg-colosseum/*`) têm metadata própria ou herdam do pai?

**Palavras-chave esperadas para um site de esports português:**
- Título deve conter variações de: "WayGaming", "esports", "League of Legends", "Valorant", "Portugal"
- Description deve mencionar o contexto competitivo e localização

---

## Formato do Relatório

Apresenta os resultados assim:

```
## Relatório de Performance & SEO — WayGaming

### Resumo Executivo
[3-4 linhas com os problemas mais críticos encontrados]

---

### 1. Imagens — X problemas (Y críticos)
[problema por problema com ficheiro:linha + código de correção]

### 2. Re-renders — X problemas
[por componente, classificado por severidade]

### 3. Bundle Size — X issues
[lista de dependências problemáticas + estimativa de impacto]

### 4. SEO — X páginas com problemas
[por página, lista de metadata em falta + sugestão de texto]

---

### Quick Wins (implementar primeiro)
[lista ordenada por impacto/esforço das 5-7 correções mais valiosas]
```

Sê específico: inclui sempre o caminho do ficheiro, o número de linha, o código problemático atual, e o código corrigido. Não faças sugestões genéricas.
