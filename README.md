# Prasanna Baskaran — Developer Portfolio

An editorial, responsive developer portfolio built with semantic HTML5, custom CSS (light & dark themes), and vanilla JavaScript.

## Sections Included
- **Hero & Engineering Overview:** Role summary, key metrics, and quick links to GitHub & LinkedIn
- **About / Domain Pillars:** Enterprise Banking, Real-Time Industrial R&D, and Scalable APIs & Data Systems
- **Experience Timeline:** Manatec Electronics, Tech Swing Solutions, and Revature India
- **Filterable Projects Grid:** Filterable by Industrial & Desktop, Banking & APIs, and Web & IoT
- **Technical Skills & Education:** Structured tech matrix and MCA (SASTRA University)
- **Contact:** One-click copy email, phone, social profiles, and a zero-backend `mailto:` contact composer

## Resume Download Button
The header, mobile menu, and hero section include a **Download Resume** button wired to `Prasanna_Baskaran_Resume.html` (which also includes a one-click **Print / Save as PDF** button). To serve your own PDF file directly instead, place `Prasanna_Baskaran_Resume.pdf` in this folder and update the `href` and `download` attributes in `index.html`.

## Contact Form Delivery
The **Send a Quick Message** form supports both:
1. **Direct delivery to `prasanna4223@gmail.com`** via [FormSubmit](https://formsubmit.co/) (no backend server or API key needed). After deploying to GitHub Pages (or any `https://` host), submit one test message and click the one-time **Activate** link sent to `prasanna4223@gmail.com`—every message afterward lands straight in your inbox with `Reply-To` set to the sender.
2. **Send via Gmail / Default Mail App:** One-click buttons below the submit button open a pre-filled draft in Gmail Web (`mail.google.com`) or the visitor's default email client (and automatically fall back to Gmail when previewed locally via `file://`).

## Preview Locally
Open `index.html` directly in any modern browser, or run a local static server from this directory:

```bash
npx serve .
```

## Deploy to GitHub Pages
1. Push these files (`index.html`, `styles.css`, `script.js`, `README.md`) to your `DeveloperPortfolio` repository on GitHub.
2. Go to **Repository Settings → Pages → Build and deployment**, select **Deploy from a branch** (`main` / root).
3. Add your live URL to your GitHub profile sidebar and repository **About** section.
