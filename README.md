# Prasanna Baskaran — Developer Portfolio

Personal portfolio website of **Prasanna Baskaran**, a **.NET Full Stack Developer \& R\&D Software Engineer** with 3+ years of experience building enterprise banking platforms, real-time industrial software, and scalable web applications.

🔗 **Live Site:** [prasnnabaskaran.github.io/DeveloperPortfolio](https://prasnnabaskaran.github.io/DeveloperPortfolio/) 
!\[Portfolio Preview](./assets/preview.svg)

\---

## About \& Key Highlights

This portfolio showcases my professional experience across **Manatec Electronics** (industrial R\&D), **Tech Swing Solutions** (enterprise banking), and **Revature India** (full-stack web), alongside featured projects and technical skills.

* **Editorial Light \& Dark Mode:** Smooth theme toggle persisted via `localStorage` and respecting `prefers-color-scheme`.
* **Responsive Across Devices:** Clean CSS Grid and Flexbox layouts tuned for desktop, tablet, mobile drawer navigation, and print.
* **Interactive Project Showcase:** Filterable project grid (*Industrial \& Desktop*, *Banking \& APIs*, *Web \& IoT*) with direct source links.
* **Direct Contact Form:** Sends client messages straight to `prasanna4223@gmail.com` via [FormSubmit](https://formsubmit.co/), with one-click **Open in Gmail**, **Default Mail App**, and **Copy Email** fallbacks.
* **Resume Page:** Built-in **View Resume** buttons open a standalone, ATS-friendly resume page directly in the browser with a one-click **Print / Save as PDF** button.
* **Fast \& Accessible:** Zero-dependency static build with semantic HTML5, skip links, `aria` attributes, scroll-spy navigation, and reduced-motion support.

\---

## Tech Stack

* **Markup:** Semantic HTML5
* **Styling:** Custom CSS3 (CSS Custom Properties, Grid, Flexbox, Light/Dark themes, Print CSS)
* **Interactivity:** Vanilla JavaScript (ES6+, `IntersectionObserver`, Clipboard API, Fetch API)
* **Contact Delivery:** FormSubmit AJAX + Gmail Web / `mailto:` fallbacks
* **Typography:** Plus Jakarta Sans, Instrument Serif, JetBrains Mono (Google Fonts with system fallbacks)
* **Deployment:** GitHub Pages (zero build step)

\---

## Running Locally

No build tools, package installation, or `.env` API keys are required.

```bash
git clone https://github.com/PrasnnaBaskaran/DeveloperPortfolio.git
cd DeveloperPortfolio
npx serve .
```

Or open `index.html` directly in any modern browser.

> \*\*Contact Form Note:\*\* When deployed to an `https://` host (such as GitHub Pages), submit one test message through the contact form and click the one-time \*\*Activate\*\* link sent to `prasanna4223@gmail.com` to enable direct inbox delivery.

\---

## Folder Structure

```text
├── assets/
│   └── preview.svg                # Portfolio preview graphic for GitHub README
├── index.html                     # Single-page portfolio entry point \& sections
├── styles.css                     # Editorial design system, light/dark themes, responsive \& print styles
├── script.js                      # Theme toggle, project filters, scroll-spy, copy email \& FormSubmit handler
├── Prasanna\_Baskaran\_Resume.html  # Standalone ATS-friendly, print-to-PDF resume page
└── README.md                      # Repository overview and documentation
```

### How the Files Connect

* **`index.html`** loads **`styles.css`** and **`script.js`**, and links its header, hero, and mobile **View Resume** buttons directly to **`Prasanna\_Baskaran\_Resume.html`**.
* **`script.js`** controls interactive UI states (`data-theme`, `.is-active`, `.is-hidden`, `.is-visible`) styled by **`styles.css`** and routes contact form submissions to FormSubmit / Gmail / `mailto:`.
* **`assets/preview.svg`** provides the visual preview displayed at the top of this **`README.md`**.

\---

## License \& Contact

Licensed under the **MIT License**—feel free to use this layout as inspiration with attribution if you fork it.

* **Email:** [prasanna4223@gmail.com](mailto:prasanna4223@gmail.com)
* **LinkedIn:** [linkedin.com/in/prasannabaskaran](https://www.linkedin.com/in/prasannabaskaran/)
* **GitHub:** [github.com/PrasnnaBaskaran](https://github.com/PrasnnaBaskaran)

