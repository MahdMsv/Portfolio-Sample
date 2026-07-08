# Mahdi Mousavi — Portfolio

A modern, dark-mode-first personal portfolio for a frontend developer. Built as a single self-contained HTML file — no build step, no dependencies to install.

**Author:** Mahdi Mousavi
**GitHub:** [@MahdMsv](https://github.com/MahdMsv)

## Features

- Dark mode by default with a light/dark toggle
- Glassmorphism cards, soft shadows, gradient accents
- Animated hero with mouse-tracked spotlight and a typing code snippet
- Scroll-triggered fade/slide-up reveal animations
- Animated skill progress bars
- Fully responsive (mobile-first) with a slide-in mobile nav
- Respects prefers-reduced-motion

## Sections

1. Hero - name, role, intro, CTAs
2. About - bio + skill icons (HTML, CSS, Tailwind, JavaScript, React)
3. Projects - card grid with hover effects
4. Skills - animated progress bars
5. Contact - form + social links (GitHub, LinkedIn, Email)

## Tech Stack

- HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (no frameworks, no build tools)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Getting Started

No installation needed.

Just open index.html in your browser, or serve it locally:

    npx serve .

## Customize

- Colors / fonts: edit the CSS custom properties at the top of the style block (:root and [data-theme="light"]).
- Content: update the text directly inside each section in index.html.
- Projects: duplicate a .project-card block inside #projects and update the title, description, tags, and gradient class (thumb-1, thumb-2, thumb-3).
- Social links: update the href attributes in the .social-list inside #contact.

## License

Free to use and modify for personal or commercial projects.
