# Nattapong Sindhu — Resume

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222?style=flat&logo=github)
![License](https://img.shields.io/github/license/nattapongsindhu/Resume)

Single-page interactive resume built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no dependencies.  
Designed for both screen and print. Fits a single A4 page when printed or saved as PDF.

**🌐 Live:** [nattapongsindhu.github.io/Resume](https://nattapongsindhu.github.io/Resume)

---

## Features

- ✅ Single A4 page when printed / saved as PDF
- ✅ Dark / Light theme toggle with localStorage persistence
- ✅ Responsive layout (desktop + mobile)
- ✅ Print-optimized `@media print` CSS
- ✅ No frameworks — pure HTML, CSS, JS
- ✅ Fast load — no build step required

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — Grid, custom properties, `@media print` |
| Interaction | Vanilla JavaScript (ES6) |
| Fonts | IBM Plex Mono + IBM Plex Sans (Google Fonts) |
| Hosting | GitHub Pages |

---

## Project Structure

```
Resume/
├── index.html        # Resume markup — all content
├── style.css         # All styles including print layout
├── script.js         # Theme toggle + cert bar animation
├── README.md
└── LICENSE
```

---

## Getting Started (Run Locally)

No build tools needed.

```bash
# Clone the repo
git clone https://github.com/nattapongsindhu/Resume.git

# Open in browser
cd Resume
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

Or simply drag `index.html` into any browser.

---

## Print / Save as PDF

1. Open the live site or local file in Chrome / Edge
2. Click **⎙ Print / Save PDF** in the toolbar
3. Set destination to **Save as PDF**
4. Paper size: **A4** — fits exactly 1 page

---

## Security Notes

- No API keys or credentials in this repository
- No external data sources or form submissions
- Contact info limited to email and GitHub profile link
- Dependencies: none (no `package.json`, no CDN scripts beyond Google Fonts)

---

## License

MIT — see [LICENSE](LICENSE)
