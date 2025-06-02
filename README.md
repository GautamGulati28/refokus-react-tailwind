# Refokus Project

A modern, performant React web application scaffolded with Vite, featuring smooth animations, custom fonts, and a modular component structure.

---

## ✨ Features

- **React 19 + Vite**: Lightning-fast development and build experience.
- **Modern Animations**: Smooth transitions using [framer-motion](https://www.framer.com/motion/) and [locomotive-scroll](https://locomotivemtl.github.io/locomotive-scroll/).
- **Custom Fonts**: Integrated Satoshi font family for a sleek, contemporary look.
- **Tailwind CSS**: Utility-first CSS for rapid UI development.
- **Reusable Components**: Modular structure for easy scaling and maintenance.
- **Media Assets**: Supports video and SVG assets for rich content.
- **ESLint Integration**: Enforced coding standards with React Hooks and Refresh plugins.

---

## 📁 Project Structure

```plaintext
├── public/
│   ├── Mediamodifier-Design(1).svg
│   ├── Mediamodifier-Design-Template.png
│   ├── Mediamodifier-Design.svg
│   ├── svgviewer-output.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── arqitel.mp4
│   │   ├── rainfall.mp4
│   │   ├── react.svg
│   │   ├── ttr.mp4
│   │   ├── yahoo.mp4
│   │   ├── yir.mp4
│   │   └── fonts/Satoshi_Complete/...
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Cards.jsx
│   │   ├── Footer.jsx
│   │   ├── Marquee.jsx
│   │   ├── Marquees.jsx
│   │   ├── Navbar.jsx
│   │   ├── Product.jsx
│   │   ├── Products.jsx
│   │   ├── Strip.jsx
│   │   ├── Stripes.jsx
│   │   └── Work.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```


---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or newer recommended)
- **npm** (v9 or newer) or **yarn**

### Installation

```bash
# Clone the repository
git clone 
cd refokus-project

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

---

## 🛠️ Tooling & Libraries

| Library             | Purpose                     |
|---------------------|----------------------------|
| React 19            | UI Library                 |
| Vite                | Build Tool & Dev Server    |
| Tailwind CSS        | Utility-first CSS          |
| framer-motion       | Animations                 |
| locomotive-scroll   | Smooth Scrolling           |
| react-icons         | Icon Library               |
| ESLint + Plugins    | Code Quality               |

---

## 🧩 Components

- **Navbar**: Responsive navigation bar.
- **Footer**: Site footer.
- **Button, Card, Cards**: UI primitives for rapid development.
- **Marquee, Marquees**: Animated text/element strips.
- **Product, Products**: Showcase product information.
- **Strip, Stripes**: Decorative or content sections.
- **Work**: Portfolio or work showcase section.

---

## 🎨 Custom Fonts

The Satoshi font family is included under `src/assets/fonts/Satoshi_Complete` with OTF, TTF, WOFF, and WOFF2 formats for wide browser support. See the included CSS for usage.

---

## 🧹 Linting

ESLint is configured with recommended rules and React-specific plugins. Run:

```bash
npm run lint
# or
yarn lint
```

---

## 📦 Scripts

| Script        | Description                    |
|---------------|-------------------------------|
| `dev`         | Start local dev server         |
| `build`       | Build for production           |
| `preview`     | Preview production build       |
| `lint`        | Run ESLint checks              |

---


## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [framer-motion](https://www.framer.com/motion/)
- [locomotive-scroll](https://locomotivemtl.github.io/locomotive-scroll/)
- [Satoshi Font](https://www.fontshare.com/fonts/satoshi)

---

> **Built with passion and modern web technologies.**
