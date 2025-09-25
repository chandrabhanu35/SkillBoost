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
