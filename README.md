# Front End Agents

Aplicação React moderna para criação de salas de chat com IA, permitindo fazer perguntas e receber respostas inteligentes em tempo real.

## 🛠️ Stack Tecnológica

### Core
- **React 19** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server

### UI/UX
- **TailwindCSS 4** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **class-variance-authority** - Variantes de componentes

### Gerenciamento de Estado
- **@tanstack/react-query** - Cache e sincronização de dados
- **React Hook Form** - Formulários
- **Zod** - Validação de schemas

### Roteamento
- **React Router DOM 7** - Navegação SPA

## 🏗️ Arquitetura

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── hooks/         # Custom hooks
├── utils/         # Utilitários
└── types/         # Definições TypeScript
```

### Padrões
- **Componentes Funcionais** com hooks
- **Separação de responsabilidades** (pages vs components)
- **TypeScript** em todo o projeto
- **TailwindCSS** para estilização

## 🚀 Setup

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repo>
cd front-end-agents

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build

## 📦 Principais Dependências

| Biblioteca | Versão | Propósito |
|------------|--------|-----------|
| React | 19.x | UI Library |
| TailwindCSS | 4.x | Styling |
| React Query | 5.x | Data fetching |
| React Router | 7.x | Routing |
| Radix UI | 2.x | Components | 