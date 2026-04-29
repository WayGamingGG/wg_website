# WayGaming Website — Project Conventions

Este documento codifica as convenções do projeto para uso como referência ao gerar ou rever código.

---

## Estrutura de Arquivos

```
src/
├── App.tsx                    # Rotas principais (HashRouter)
├── main.tsx                   # Entry point + import "./i18n"
├── index.css                  # Estilos globais + custom classes
├── pages/                     # Páginas (export default, PascalCase)
├── components/
│   ├── layout/                # Navbar, Footer, Layout wrapper
│   ├── home/                  # Componentes da homepage
│   ├── store/                 # Componentes da loja
│   ├── teams/                 # Componentes de equipes
│   ├── players/               # Componentes de jogadores
│   ├── wg-colosseum/          # Subprojeto WG Colosseum (prefixo WG)
│   └── ui/                    # shadcn/ui (não modificar diretamente)
├── stores/                    # Zustand stores
├── lib/                       # Utilitários (shopify, utils, seo)
├── i18n/                      # react-i18next + locales/en.ts + locales/pt.ts
└── hooks/                     # Custom hooks
```

**Naming:**
- Pastas: `kebab-case`
- Componentes/Páginas: `PascalCase.tsx`
- Subfeatures com prefixo: `WGNavbar.tsx`, `WGHeroSection.tsx`
- Utilitários/Stores/Hooks: `camelCase.ts` ou `use-kebab.tsx`

---

## Componentes

### Export Pattern

```typescript
// Componentes → named export
export const HeroSection = () => { ... };

// Páginas → default export
const Index = () => { ... };
export default Index;
```

### Props Interface

```typescript
// Padrão: {ComponentName}Props
interface PlayerCardProps {
  player: Player;
  accentColor?: string;  // props opcionais com valor padrão no parâmetro
}

export const PlayerCard = ({ player, accentColor = "from-primary/20" }: PlayerCardProps) => {
  ...
};
```

### Estrutura de Componente

```typescript
import { useState } from "react";
import { useTranslation } from "react-i18next";
// externas → UI/ícones → componentes internos → utils/stores

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";

interface MyComponentProps {
  label: string;
}

export const MyComponent = ({ label }: MyComponentProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // handler logic
  };

  return (
    <section className="relative ...">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* ... */}
      </div>
    </section>
  );
};
```

### Seções de Página (pattern)

```typescript
<section className="relative min-h-[90vh] flex items-center overflow-hidden">
  {/* Background decorativo */}
  <div className="absolute inset-0 bg-grid opacity-20" />
  <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />

  {/* Conteúdo */}
  <div className="container mx-auto px-4 relative z-10">
    {/* ... */}
  </div>

  {/* Fade bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
</section>
```

### Card com Hover (pattern)

```typescript
<div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500">
  {/* Imagem */}
  <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
    <img className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-background ... opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>

  {/* Info */}
  <div className="p-6">
    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
      {name}
    </h3>
  </div>

  {/* Decorative corner */}
  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</div>
```

---

## Tailwind CSS

### Utilitário cn()

```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes",
  condition && "conditional-class",
  variant === "active" ? "active-class" : "inactive-class"
)}
```

### Cores do Tema (CSS Variables)

| Token | Cor | Uso |
|-------|-----|-----|
| `text-primary` | Amarelo ouro | Destaque principal |
| `text-accent` | Vermelho flame | Destaque secundário |
| `text-foreground` | Branco neutro | Texto principal |
| `text-muted-foreground` | Cinza claro | Texto secundário |
| `bg-background` | Preto profundo | Fundo geral |
| `bg-card` | Cinza grafite | Cards/superfícies |
| `bg-secondary` | Cinza grafite médio | Elementos secundários |
| `border-border` | Cinza médio | Bordas padrão |

### Classes Customizadas (index.css)

```typescript
"text-glow"          // text-shadow com neon glow
"text-glow-strong"   // text-shadow mais intenso
"box-glow"           // box-shadow com neon glow
"box-glow-strong"    // box-shadow mais intenso
"gradient-text"      // texto com gradiente primary
"bg-grid"            // padrão grid de fundo
"animate-float"      // animação de flutuação 3s
"animate-slide-up"   // animação slide-up 0.6s
"animate-pulse-slow" // pulse 3s
```

### Glow Effect Inline

```typescript
"shadow-[0_0_20px_hsl(186_100%_50%_/_0.5)]"
"hover:shadow-[0_0_40px_hsl(186_100%_50%_/_0.8)]"
"drop-shadow-[0_0_12px_rgba(0,255,200,0.6)]"
"group-hover:drop-shadow-[0_0_22px_rgba(0,255,200,0.9)]"
```

### Tipografia

```typescript
"font-display"  // Bebas Neue / Anton — títulos, headings
"font-body"     // Inter — corpo, botões, labels
```

### Padrões Frequentes

```typescript
// Layout de página
"container mx-auto px-4"

// Flex centrado
"flex items-center justify-between"
"flex items-center gap-4"

// Grid responsivo
"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"

// Mostrar/esconder por breakpoint
"hidden md:flex"
"flex md:hidden"

// Transição padrão
"transition-all duration-300"
"transition-colors duration-200"

// Estados hover padrão
"hover:text-primary"
"hover:bg-secondary"
"hover:border-primary/50"

// Padding de seção
"py-16 md:py-20 lg:py-24"
"px-4 md:px-8"
```

### Animações com Delay

```typescript
<div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
<div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
```

---

## Internacionalização (i18n)

### Setup

- Idioma padrão: `pt` (Português)
- Fallback: `pt`
- Persistência: `localStorage` (`wg-lang`)
- Arquivos: `src/i18n/locales/en.ts` e `src/i18n/locales/pt.ts`
- Importado em `main.tsx`: `import "./i18n";`

### Uso em Componentes

```typescript
import { useTranslation } from "react-i18next";

const { t } = useTranslation();

// Chave simples
t('hero.title1')
t('nav.aboutUs')

// Interpolação
t('nav.footerCopyright', { year: new Date().getFullYear() })

// Arrays de objetos
const items = t('news.items', { returnObjects: true }) as Array<{ title: string; excerpt: string }>;

// Pluralização
t('cart.itemCount_one', { count: 1 })
t('cart.itemCount_other', { count: totalItems })
```

### Estrutura de Chaves

Dot notation agrupada por contexto:

```typescript
{
  common: { back, joinUs, apply, explore, comingSoon },
  nav: { aboutUs, esports, footerDesc, footerCopyright },
  hero: { badge, title1, title2, title3, description, cta, statChampionships },
  teams: { title, subtitle, viewTeam, players },
  news: { title, subtitle, items: [{ title, excerpt, date }] },
  about: { heroTitle, historyTitle, history: [], valuesTitle, values: [] },
  cart: { empty, itemCount_one, itemCount_other, title, total, checkout },
  store: { title, description, emptyTitle, emptyDescription },
}
```

**Regra:** sempre adicionar nova chave em AMBOS os arquivos (`en.ts` e `pt.ts`).

---

## Estado (Zustand)

### Pattern de Store

```typescript
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface MyStore {
  // State
  items: Item[];
  isLoading: boolean;

  // Actions
  addItem: (item: Item) => void;
  setLoading: (loading: boolean) => void;
}

export const useMyStore = create<MyStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,

      addItem: (item) => set({ items: [...get().items, item] }),
      setLoading: (isLoading) => set({ isLoading }),
    }),
    {
      name: 'my-store-key',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
```

### Uso do Store

```typescript
// Seleção seletiva (preferida para performance)
const addItem = useCartStore(state => state.addItem);

// Destructuring múltiplos
const { items, isLoading, removeItem } = useCartStore();

// Acesso fora de componente
const url = useCartStore.getState().checkoutUrl;
```

---

## Importações

Ordem padrão de imports:

```typescript
// 1. React e bibliotecas core
import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// 2. Bibliotecas UI e ícones
import { Menu, X, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

// 3. Componentes internos (path alias @/)
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";

// 4. Utilitários, stores, tipos
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, type ShopifyProduct } from "@/lib/shopify";
import { SEO_LOGO, SEO_SITE_NAME } from "@/lib/seo";
```

---

## SEO (todas as páginas)

```typescript
import { Helmet } from "react-helmet-async";
import { SEO_LOGO, SEO_SITE_NAME, SEO_TWITTER } from "@/lib/seo";

// Dentro do componente de página:
<Helmet>
  <title>Título da Página — WayGaming Esports</title>
  <meta name="description" content="Descrição da página..." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SEO_SITE_NAME} />
  <meta property="og:title" content="Título" />
  <meta property="og:image" content={SEO_LOGO} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={SEO_TWITTER} />
</Helmet>
```

---

## Routing (HashRouter)

```typescript
// Rotas são hash-based: /#/about, /#/store/product/handle
// NUNCA usar BrowserRouter — o site está em GitHub Pages static hosting

import { HashRouter, Routes, Route } from "react-router-dom";

// Links internos
<Link to="/about">Sobre</Link>

// Navegação programática
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/store");
```

---

## shadcn/ui

- Componentes em `src/components/ui/` — **não editar diretamente**
- Adicionar novos via CLI: `npx shadcn@latest add <component>`
- Variantes do Button customizadas: `default`, `outline`, `ghost`, `hero`, `accent`, `secondary`

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

// Variantes de Button disponíveis:
<Button variant="default" size="default">Ação Principal</Button>
<Button variant="outline" size="icon"><Icon /></Button>
<Button variant="hero" size="xl">CTA Hero</Button>
<Button variant="accent">Destaque</Button>
```

---

## Interfaces de Dados Principais

```typescript
// src/lib/shopify.ts
export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
    images: { edges: Array<{ node: { url: string; altText: string } }> };
    variants: { edges: Array<{ node: { id: string; title: string; price: { amount: string; currencyCode: string }; availableForSale: boolean; selectedOptions: Array<{ name: string; value: string }> } }> };
    options: Array<{ name: string; values: string[] }>;
  };
}

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: { amount: string; currencyCode: string };
  quantity: number;
  selectedOptions: Array<{ name: string; value: string }>;
}

// Dados de jogadores/staff (definidos inline nas páginas)
interface Player {
  id: string;
  nickname: string;
  realName: string;
  role: string;
  nationality: string;
  image?: string;
}

interface StaffMember {
  id: string;
  name: string;
  role: string;
  description: string;
  nationality?: string;
  image?: string;
}
```

---

## Checklist para Novos Componentes

- [ ] Arquivo em `PascalCase.tsx` na pasta feature correta (`kebab-case/`)
- [ ] `export const` (named export) para componentes, `export default` para páginas
- [ ] Props interface nomeada `{ComponentName}Props`
- [ ] `useTranslation()` para todo texto visível ao usuário
- [ ] Adicionar chaves de tradução em `en.ts` e `pt.ts`
- [ ] Usar `cn()` para classes condicionais
- [ ] Usar `@/` path alias nos imports
- [ ] Usar tokens de cor do tema (`text-primary`, `bg-card`, etc.)
- [ ] `transition-all duration-300` em elementos interativos
- [ ] `font-display` para headings, `font-body` para texto/botões
- [ ] `<Helmet>` com metadata em páginas novas
- [ ] `container mx-auto px-4` para layout de conteúdo
