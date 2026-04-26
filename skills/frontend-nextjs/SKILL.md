---
name: frontend-nextjs-react
description: Build modern, production-grade frontend applications using Next.js 15, React 19, TypeScript, Tailwind CSS, and shadcn/ui. Includes best practices for folder structure, component architecture, state management, API integration, and responsive design. Use when creating React applications, web portals, dashboards, or any frontend interface.
---

# Frontend Development - Next.js & React

Guia completo para desenvolvimento frontend moderno com foco em qualidade de produção, escalabilidade e excelência técnica.

---

## 🎯 Stack Tecnológico

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Next.js** | 15+ | Framework React com App Router |
| **React** | 19+ | Biblioteca UI |
| **TypeScript** | 5+ | Tipagem estática |
| **Tailwind CSS** | 4+ | Estilização utilitária |
| **shadcn/ui** | Latest | Componentes base (Radix + Tailwind) |
| **TanStack Query** | 5+ | Gerenciamento de dados do servidor |
| **Zustand** | 5+ | Estado global (quando necessário) |
| **React Hook Form** | 7+ | Formulários performáticos |
| **Zod** | 3+ | Validação de schemas |

---

## Princípios Fundamentais

1. **Minimal changes** — Altere o mínimo possível; cada linha é dívida técnica
2. **Pesquise antes** — Busque na web padrões estabelecidos antes de implementar
3. **Zero gambiarra** — Se parece hack, é hack. Encontre a solução idiomática
4. **Menos código, mais qualidade** — Soluções elegantes sem sacrificar segurança

---

## 📁 Estrutura de Pastas

```
my-app/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Grupo de rotas - Auth
│   │   ├── login/
│   │   ├── signup/
│   │   └── layout.tsx            # Layout compartilhado
│   ├── (dashboard)/              # Grupo de rotas - Dashboard
│   │   ├── dashboard/
│   │   ├── proposals/
│   │   ├── settings/
│   │   ├── layout.tsx            # Layout com sidebar
│   │   └── page.tsx              # /dashboard
│   ├── api/                      # API Routes (se necessário)
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Estilos globais
├── components/
│   ├── ui/                       # shadcn/ui components (auto-generated)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── common/                   # Componentes reutilizáveis
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   ├── footer.tsx
│   │   └── loading-spinner.tsx
│   ├── forms/                    # Componentes de formulário
│   │   ├── login-form.tsx
│   │   └── proposal-form.tsx
│   ├── tables/                   # Tabelas específicas
│   │   └── proposals-table.tsx
│   └── charts/                   # Gráficos
│       └── stats-chart.tsx
├── hooks/                        # Custom React hooks
│   ├── use-auth.ts
│   ├── use-proposals.ts
│   └── use-local-storage.ts
├── lib/                          # Utilitários e configurações
│   ├── utils.ts                  # cn() e helpers
│   ├── api.ts                    # Configuração Axios/fetch
│   ├── constants.ts              # Constantes da aplicação
│   └── validations.ts            # Schemas Zod
├── stores/                       # Zustand stores
│   └── auth-store.ts
├── types/                        # Tipos TypeScript globais
│   ├── user.ts
│   ├── proposal.ts
│   └── api.ts
├── public/                       # Assets estáticos
│   ├── images/
│   └── fonts/
├── middleware.ts                 # Next.js middleware
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🏗️ Arquitetura de Componentes

### Hierarquia de Componentes

```
┌─────────────────────────────────────────┐
│           PÁGINAS (Pages)               │
│   - Roteamento do Next.js               │
│   - Data fetching (server components)   │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│         FEATURES (Features)             │
│   - Componentes específicos de página   │
│   - Combinam múltiplos componentes      │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│       COMPONENTES COMUNS (Common)       │
│   - Header, Sidebar, Footer             │
│   - Layouts compartilhados              │
└─────────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│          UI COMPONENTS (shadcn)         │
│   - Button, Input, Dialog, etc.         │
│   - Base para todos os componentes      │
└─────────────────────────────────────────┘
```

### Princípios de Componentes

1. **Single Responsibility**: Um componente faz uma coisa bem feita
2. **Composition over Inheritance**: Compor componentes ao invés de herdar
3. **Props Interface Clara**: TypeScript para todas as props
4. **Default Exports para Pages**: Named exports para componentes reutilizáveis

---

## 🧩 Padrões de Componentes

### Server Component (Padrão)

```tsx
// app/dashboard/page.tsx
import { ProposalsTable } from '@/components/tables/proposals-table';
import { StatsCards } from '@/components/dashboard/stats-cards';
import { getProposals } from '@/lib/api';

// Server Component = Data fetching no servidor
export default async function DashboardPage() {
  const proposals = await getProposals();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <StatsCards />
      <ProposalsTable data={proposals} />
    </div>
  );
}
```

### Client Component (Quando necessário)

```tsx
'use client';

// components/forms/login-form.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/use-auth';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    setIsLoading(true);
    try {
      await login(data);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        {...form.register('email')}
        error={form.formState.errors.email?.message}
      />
      <Input
        type="password"
        placeholder="Senha"
        {...form.register('password')}
        error={form.formState.errors.password?.message}
      />
      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  );
}
```

### Componente UI com shadcn

```tsx
// components/ui/card.tsx
import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

export { Card };
```

---

## 🎨 Estilização com Tailwind

### Princípios

1. **Mobile First**: Sempre comece pelo mobile
2. **Utility Classes**: Use classes utilitárias, evite CSS custom
3. **Componentes com cn()**: Merge de classes condicional
4. **Design Tokens**: Use as variáveis CSS do shadcn

### Padrão de Classes

```tsx
// ❌ Ruim - Classes dinâmicas com template string
<div className={`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-500'}`}>

// ✅ Bom - Usando cn() para merge condicional
<div className={cn('p-4', isActive ? 'bg-blue-500' : 'bg-gray-500')}>

// ❌ Ruim - Repetição de classes
<div className="flex items-center justify-between px-4 py-2">
<div className="flex items-center justify-between px-4 py-2">

// ✅ Bom - Extrair para componente ou usar @apply (raramente)
```

### Variáveis de Design (globals.css)

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }
}
```

---

## 🔄 Gerenciamento de Estado

### Server State (TanStack Query)

```tsx
// hooks/use-proposals.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { Proposal } from '@/types/proposal';

const PROPOSALS_KEY = 'proposals';

export function useProposals() {
  return useQuery({
    queryKey: [PROPOSALS_KEY],
    queryFn: async () => {
      const { data } = await api.get<Proposal[]>('/proposals');
      return data;
    },
  });
}

export function useCreateProposal() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newProposal: CreateProposalInput) => {
      const { data } = await api.post('/proposals', newProposal);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PROPOSALS_KEY] });
    },
  });
}
```

### Client State (Zustand)

```tsx
// stores/auth-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/types/user';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setAuth: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
```

---

## 🌐 Integração com API

### Configuração do Axios

> **Lição Aprendida**: Next.js proxy (`rewrites`) não repassa cookies HttpOnly entre portas. Chame o backend diretamente.

```tsx
// lib/api.ts
import axios, { AxiosError } from 'axios';
import { useAuthStore } from '@/stores/auth-store';
import { toast } from 'sonner';

// Em dev, chame o backend diretamente (não use proxy para cookies httpOnly)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1';

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,  // CRÍTICO: Envia cookies em cross-origin
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const originalRequest = error.config as (typeof error.config & { _retry?: boolean });

    // Rotas de auth NÃO devem tentar refresh
    const isAuthRequest = originalRequest?.url?.includes('/login') ||
                          originalRequest?.url?.includes('/signup');

    // Para login/signup, deixe o componente tratar o erro
    if (error.response?.status === 401 && isAuthRequest) {
      return Promise.reject(error);
    }

    // Para outras rotas 401, limpe auth e redirecione
    if (error.response?.status === 401 && !originalRequest?._retry) {
      useAuthStore.getState().logout();
      toast.error('Sessão expirada', {
        description: 'Por favor, faça login novamente.',
      });
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);
```

### HttpOnly Cookies e Proxies

| Cenário | Solução |
|---------|---------|
| **Dev com proxy** | ❌ Cookies httpOnly não passam |
| **Dev direto** | ✅ `NEXT_PUBLIC_API_URL=http://localhost:3000/api/v1` |
| **Produção** | ✅ Configure CORS + `withCredentials: true` |

```tsx
// next.config.ts - NÃO use rewrites para APIs com cookies httpOnly
const nextConfig = {
  env: {
    // Dev: chame backend diretamente
    // Prod: configure via variável de ambiente
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/v1',
  },
};
```

### Chamadas Tipadas

```tsx
// lib/api.ts
import type { Proposal, CreateProposalInput } from '@/types/proposal';

export const proposalsApi = {
  getAll: () => api.get<Proposal[]>('/proposals'),
  getById: (id: string) => api.get<Proposal>(`/proposals/${id}`),
  create: (data: CreateProposalInput) => api.post('/proposals', data),
  update: (id: string, data: Partial<CreateProposalInput>) =>
    api.patch(`/proposals/${id}`, data),
  delete: (id: string) => api.delete(`/proposals/${id}`),
};
```

---

## 📱 Responsividade

### Breakpoints do Tailwind

```tsx
// Mobile First (padrão)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

// sm: 640px  - Mobile landscape
// md: 768px  - Tablet
// lg: 1024px - Desktop
// xl: 1280px - Large desktop
// 2xl: 1536px - Extra large
```

### Padrão de Layout Responsivo

```tsx
// app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar - hidden no mobile */}
      <aside className="hidden lg:block w-64 bg-sidebar">
        <Sidebar />
      </aside>
      
      {/* Main content */}
      <main className="flex-1 p-4 lg:p-8 overflow-auto">
        <MobileHeader /> {/* Apenas no mobile */}
        {children}
      </main>
    </div>
  );
}
```

---

## 🔐 Autenticação e Rotas

### Middleware de Autenticação

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') ||
                     request.nextUrl.pathname.startsWith('/signup');

  // Redireciona não autenticados para login
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redireciona autenticados para dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

### Proteção de Rotas por Role

```tsx
// hooks/use-auth.ts
import { useAuthStore } from '@/stores/auth-store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function useRequireAuth(role?: 'ADMIN' | 'USER') {
  const { isAuthenticated, user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (role && user?.role !== role) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, user, role, router]);

  return { user, isAuthenticated };
}
```

---

## 🧪 Testes

### Estrutura de Testes

```
├── __tests__/
│   ├── unit/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── lib/
│   ├── integration/
│   │   └── api/
│   └── e2e/
│       └── auth.spec.ts
```

### Teste de Componente

```tsx
// __tests__/unit/components/button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows loading state', () => {
    render(<Button isLoading>Loading</Button>);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
```

---

## ⚡ Performance

### Otimizações Obrigatórias

1. **Images**: Use `next/image` sempre
2. **Fonts**: Use `next/font` para otimização
3. **Dynamic Imports**: Para componentes pesados
4. **React.memo**: Para componentes que renderizam frequentemente
5. **useMemo/useCallback**: Quando necessário, mas não exagere

### Exemplo de Dynamic Import

```tsx
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/charts/heavy-chart'), {
  loading: () => <Skeleton className="h-64 w-full" />,
  ssr: false, // Desativa SSR se o componente usa browser APIs
});
```

---

## 🎨 Design System

### Paleta de Cores

Use as variáveis CSS do shadcn/ui:

```tsx
// Primária
bg-primary           // Fundo primário
text-primary-foreground  // Texto sobre fundo primário

// Secundária
bg-secondary
text-secondary-foreground

// Estados
bg-destructive       // Erros
bg-muted             // Fundos sutis
bg-accent            // Destaques

// Bordas
border-border        // Bordas padrão
```

### Tipografia

```tsx
// Títulos
<h1 className="text-4xl font-bold tracking-tight">
<h2 className="text-3xl font-semibold">
<h3 className="text-2xl font-semibold">

// Corpo
text-base           // Texto normal (16px)
text-sm             // Texto pequeno (14px)
text-xs             // Texto extra pequeno (12px)
text-lg             // Texto grande (18px)

// Pesos
font-normal         // 400
font-medium         // 500
font-semibold       // 600
font-bold           // 700
```

### Espaçamento

```tsx
// Padrão (4px base)
space-y-4           // 16px entre elementos
p-6                 // 24px padding
gap-4               // 16px gap

// Container
container mx-auto px-4  // Container centralizado com padding
```

---

## ✅ Checklist de Qualidade

### Antes de Commitar

- [ ] TypeScript sem erros (`tsc --noEmit`)
- [ ] ESLint passando (`next lint`)
- [ ] Componente renderiza sem erros
- [ ] Props tipadas corretamente
- [ ] Responsividade testada
- [ ] Navegação por teclado funciona
- [ ] Nenhum `console.log` de debug

### Code Review

- [ ] Componentes seguem Single Responsibility
- [ ] Hooks customizados extraídos quando necessário
- [ ] Estados globais minimizados
- [ ] Queries do TanStack otimizadas
- [ ] Acessibilidade (ARIA labels, foco)

---

## 📚 Comandos Úteis

```bash
# Criar componente shadcn
npx shadcn add button

# Criar novo projeto
npx shadcn@latest init

# Instalar dependências
npm install @tanstack/react-query zustand axios react-hook-form zod

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Testes
npm test

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

---

## 🔗 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TanStack Query](https://tanstack.com/query)
- [Zustand](https://github.com/pmndrs/zustand)
