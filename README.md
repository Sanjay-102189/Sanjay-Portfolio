# Sanjay S – Futuristic 3D Cyber Security & Full-Stack Developer Portfolio

A cinematic, interactive, 3D personal portfolio website built with modern web technologies for **Sanjay S**, specializing in **Cyber Security**, **Full-Stack Development**, and **AI Engineering**.

---

## 🚀 Features

- **Cinematic 3D Visuals**: Three.js & React Three Fiber dynamic floating geometric core, rotating rings, and reactive particle fields.
- **Futuristic HUD / Cyberpunk UI**: Sleek dark theme (`#05070D`), neon cyan/blue/purple glows, grid backdrops, custom cursor, and smooth scroll progress.
- **Terminal & Interactive Elements**: Interactive cyber terminal, live status indicator, and dynamic filter controls.
- **Responsive Architecture**: Fully responsive across desktops, tablets, and smartphones.
- **Sections**:
  - **Hero**: 3D Scene, dynamic title typing, quick badges, quick links, and terminal status.
  - **About**: Journey, mission, cybersecurity ethos, and key stats.
  - **Skills**: Categorized technical stacks (Frontend, Backend, Security, AI/ML, DevOps & Tools).
  - **Projects**: Filterable showcase with tags, live demo links, and GitHub repositories.
  - **Experience & Education**: Timeline of professional journey and academic background.
  - **Achievements & Certifications**: Industry credentials and badges.
  - **Coding Profiles**: LeetCode, GitHub, HackerRank, CodeChef stats & links.
  - **Contact**: Interactive contact form with EmailJS integration and social links.
  - **Back to Top & Custom Cursor**: Cyberpunk interactive micro-animations.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) & Vanilla CSS animations
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact Handling**: [@emailjs/browser](https://www.emailjs.com/)

---

## 🏁 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.17.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### 2. Installation
```bash
npm install --legacy-peer-deps
```

### 3. Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied) in your browser.

### 4. Production Build
Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run start
```

---

## ⚙️ Environment Variables

Create or update `.env.local` to enable the contact form via EmailJS:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 📁 Project Structure

```
├── public/                 # Static assets, SVG icons, and favicons
├── src/
│   ├── app/
│   │   ├── globals.css     # Global cyber styling, scrollbars, glowing animations
│   │   ├── layout.tsx      # Root metadata, fonts, and open-graph tags
│   │   ├── not-found.tsx   # Custom 404 page
│   │   └── page.tsx        # Single-page application entry with loading screen
│   ├── components/         # Modular UI & 3D components
│   │   ├── HeroScene.tsx   # React Three Fiber 3D Canvas
│   │   ├── Hero.tsx        # Hero section with HUD overlay
│   │   ├── About.tsx       # About narrative & statistics
│   │   ├── Skills.tsx      # Interactive skill matrices
│   │   ├── Projects.tsx    # Filterable project portfolio
│   │   ├── Experience.tsx  # Timeline of roles
│   │   ├── Achievements.tsx# Highlights & awards
│   │   ├── Certifications.tsx # Credential badges
│   │   ├── Education.tsx   # Degree & university records
│   │   ├── CodingProfiles.tsx # LeetCode, GitHub, etc.
│   │   ├── Contact.tsx     # Contact form with EmailJS
│   │   ├── Navbar.tsx      # Floating cyber navigation
│   │   ├── Footer.tsx      # Footer with quick links
│   │   ├── CustomCursor.tsx# Cyber glowing cursor
│   │   ├── ScrollProgress.tsx # Top gradient progress bar
│   │   ├── ParticleBackground.tsx # Canvas particle backdrop
│   │   └── LoadingScreen.tsx # Futuristic startup sequence
│   └── config/
│       └── site.ts         # Portfolio data & social links configuration
├── next.config.js          # Next.js configuration & path aliases
├── tailwind.config.ts      # Custom theme, cyber colors, and keyframe animations
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies & scripts
```

---

## 📄 License
MIT License. Created for **Sanjay S**.
