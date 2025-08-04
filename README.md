# Gridsphere Landing Page

Gridsphere is a startup focused on **Smart Farming Solutions**, transforming agriculture with real-time sensing and AI.  
This project is a modern, responsive landing page for Gridsphere, built with React and Vite.

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Sticky Header:** Navigation bar stays visible at the top.
- **Mobile Dropdown Menu:** Hamburger menu for easy navigation on phones.
- **Modern UI:** Clean, professional look using Tailwind CSS.
- **React Router:** Fast, client-side navigation.
- **Easy Customization:** Modular code structure.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gridsphere-landing-page.git
   cd gridsphere-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  assets/         # Images and SVGs
  logos/          # Logo and menu icon components
  sections/       # Page sections (Header, Footer, etc.)
  App.jsx         # Main app component
  main.jsx        # Entry point
```

## Customization

- **Navigation:** Edit `src/sections/Header.jsx` to update navigation links.
- **Branding:** Replace the logo in `src/assets/`.
- **Content:** Update text and sections in `src/sections/` as needed.

## Deployment

To build for production:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

## About Gridsphere

Gridsphere aims to revolutionize agriculture by providing smart, AI-powered solutions for real-time monitoring and decision-making.  
Our platform helps farmers optimize resources, increase yield, and reduce manual effort through advanced sensing and analytics.

---

Made with ❤️ using React +vite.