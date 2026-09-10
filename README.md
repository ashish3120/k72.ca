# K72 Architecture Website (k72.ca Clone)

A modern, responsive web application built with React 19, Vite, Tailwind CSS v4, and React Router. Inspired by the K72 agency portfolio/brand experience.

---

## 🚀 Features

- **Dynamic Interactive Layouts**: Responsive navigation, interactive brand elements, smooth scrolling, and video/media integration.
- **Modern UI Styling**: Built using Tailwind CSS v4 and custom typography fonts.
- **Fast Build & HMR**: Powered by Vite 8 for instant developer feedback and fast bundle sizes.
- **Single Page Routing**: Client-side routing configured via `react-router-dom`.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)

---

## 📦 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ashish3120/k72.ca.git
cd k72.ca
npm install
```

### 3. Running Locally

Start the local development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### 4. Build for Production

Generate static assets for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🌐 Vercel Deployment

This project is configured and ready to be deployed on **Vercel**.

### Standard Vercel Setup:
1. Push your changes to GitHub (main branch).
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New"** > **"Project"**.
3. Import your `k72.ca` repository.
4. Select framework preset as **Vite**.
5. Keep default build commands (`npm run build`) and output directory (`dist`).
6. Click **Deploy**.

> Note: If using client-side routing routes directly on page refresh, a `vercel.json` rewrite file can be included to map all routes to `index.html`.

---

## 📄 License

This project is open source and available for educational/portfolio purposes.
