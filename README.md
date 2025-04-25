This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 📁 Portfolio com Painel de Gerenciamento

Projeto de portfólio pessoal desenvolvido com Next.js, com área administrativa para adicionar, editar e remover projetos. Fullstack com autenticação e banco de dados integrado.

---

## 🛣️ Roadmap de Desenvolvimento

### ✅ Etapa 1 – Preparação do Projeto
- [x] Criar projeto com `create-next-app` usando App Router
- [x] Instalar TailwindCSS
- [x] Instalar e configurar Prisma
- [x] Criar estrutura de pastas e layout inicial

---

### 🗃️ Etapa 2 – Modelagem de Dados
- [ ] Criar modelo `Projeto` (Prisma)
- [ ] Rodar migração do banco de dados

---

### ⚙️ Etapa 3 – Backend (API Routes ou Server Actions)
- [ ] Criar rotas para:
  - `GET /api/projetos`
  - `POST /api/projetos`
  - `PUT /api/projetos/:id`
  - `DELETE /api/projetos/:id`
- [ ] Validar dados com Zod

---

### 🔐 Etapa 4 – Autenticação
- [ ] Instalar e configurar NextAuth
- [ ] Implementar login com Google ou GitHub
- [ ] Proteger rotas do painel admin

---

### 🧑‍💻 Etapa 5 – Painel Administrativo
- [ ] Página `/admin`
- [ ] Listagem de projetos com editar/deletar
- [ ] Formulário para criar/editar projetos
- [ ] Upload de imagem (Cloudinary ou local)

---

### 🌍 Etapa 6 – Site Público
- [ ] Página Home com apresentação pessoal
- [ ] Listagem dos projetos
- [ ] Página de detalhes do projeto (opcional)
- [ ] Navbar e footer

---

### 💄 Etapa 7 – Estilização e UX
- [ ] Estilização com Tailwind
- [ ] Animações (Framer Motion)
- [ ] Dark mode
- [ ] Feedback visual nas ações

---

### 🚀 Etapa 8 – Deploy
- [ ] Deploy na Vercel
- [ ] Banco de dados em nuvem (Supabase, PlanetScale, MongoDB Atlas)
- [ ] Variáveis de ambiente no deploy

---

### 🔧 Etapa 9 – Refino e Funcionalidades Extras
- [ ] Filtros por tecnologia
- [ ] Página de contato
- [ ] SEO básico
- [ ] Deploy contínuo com GitHub Actions