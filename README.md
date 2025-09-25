# SkillBoost 🚀

> **Practice Aptitude, Reasoning & Coding with AI**

SkillBoost is an AI-powered learning platform designed to help students enhance their problem-solving skills in aptitude, reasoning, and coding through personalized practice sessions and intelligent feedback.

## 🎯 Project Vision

Create a comprehensive student-focused LLM (Large Language Model) application that provides:
- **Personalized Learning**: Adaptive practice sets based on individual performance
- **AI-Powered Feedback**: Instant, detailed explanations and hints
- **Comprehensive Coverage**: Aptitude, logical reasoning, and coding challenges
- **Progress Tracking**: Monitor improvement over time

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript for type safety
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) for modern UI
- **Fonts**: Geist Sans & Geist Mono for optimal readability
- **Development**: Turbopack for fast development builds

## 🏗️ Project Structure

```
skillboost/
├── app/                    # Next.js App Router directory
│   ├── globals.css        # Global styles with Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page with hero section
│   ├── login/             # Authentication pages
│   │   └── page.tsx       # Login form (placeholder)
│   └── register/          # User registration
│       └── page.tsx       # Registration form (placeholder)
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd skillboost
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Current Features

### ✅ Implemented
- **Landing Page**: Clean, modern design with clear value proposition
- **Navigation**: Top navbar with SkillBoost branding
- **Hero Section**: Compelling headline and call-to-action buttons
- **Routing**: Basic page structure for login/register flows
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

### 🔄 In Development
- User authentication system
- Practice session interface
- AI integration for problem generation
- Progress tracking dashboard
- Performance analytics

## 🎨 Design Philosophy

- **Clean & Modern**: Minimalist design focusing on content
- **Accessible**: WCAG compliant with proper contrast and navigation
- **Mobile-First**: Responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth interactions

## 📝 Development Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

## 🔧 Configuration

- **Next.js Config**: `next.config.ts` - Framework configuration
- **TypeScript**: `tsconfig.json` - Type checking settings
- **Tailwind CSS**: `tailwind.config.js` - Styling configuration
- **ESLint**: `eslint.config.mjs` - Code quality rules

## 🚀 Deployment

This project is optimized for deployment on:
- **Vercel** (recommended): Zero-config deployment
- **Netlify**: Static site hosting
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)
- Inspired by modern educational platforms
- Designed for the next generation of learners

---

**Made with ❤️ for students who want to excel**

---

## 🔐 Authentication & Database Setup

This project uses NextAuth (Google, GitHub, and Credentials) with Prisma + Postgres.

### 1) Environment Variables
Create `.env` from `.env.example` and fill in the values:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-strong-secret

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/skillboost?schema=public

GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
GITHUB_ID=...
GITHUB_SECRET=...
```

Note: `.env.example` is committed; `.env` is ignored by git.

### 2) Install Packages

```
npm i next-auth @next-auth/prisma-adapter bcrypt zod react-hook-form @hookform/resolvers @prisma/client
npm i -D prisma @types/bcrypt
```

### 3) Prisma

- Schema: `prisma/schema.prisma`
- Generated client output: `app/generated/prisma` (gitignored)

Run migrations (requires `DATABASE_URL`):

```
npx prisma migrate dev -n "init_auth"
```

### 4) Run the App

```
npm run dev
```

Open http://localhost:3000 and test:

- `/login`: Google, GitHub, and email/password login
- `/register`: Creates credentials user via `/api/register`
- `/dashboard`: Protected; redirects to `/login` when unauthenticated

### 5) Auth-aware Header

`app/components/Header.tsx` shows Login/Register when logged out, and Dashboard/Sign out when logged in.

### 6) API Routes

- NextAuth: `app/api/auth/[...nextauth]/route.ts`
- Registration: `app/api/register/route.ts`

If Google/GitHub OAuth credentials are not provided, the buttons will attempt to sign in but you won’t complete the flow until keys are set.

