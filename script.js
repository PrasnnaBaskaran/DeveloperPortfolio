(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const scrollProgress = document.getElementById("scrollProgress");
  const toastEl = document.getElementById("toast");

  // 1. Theme persistence (respects saved preference or system preference)
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  }

  // 2. Mobile drawer navigation
  if (menuToggle && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = !mobileDrawer.hidden;
      mobileDrawer.hidden = isOpen;
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    mobileDrawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  // 3. Scroll progress bar
  const updateProgress = () => {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
    scrollProgress.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  // 4. Reveal-on-scroll animations
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // 5. Active section nav highlight
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // 6. Project category filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.filter;
      filterButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-selected", String(active));
      });

      projectCards.forEach((card) => {
        const match = category === "all" || card.dataset.category === category;
        card.classList.toggle("is-hidden", !match);
        if (match) {
          card.classList.add("is-visible");
        }
      });
    });
  });

  // 7. Toast helper
  let toastTimer = null;
  const showToast = (message) => {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 2800);
  };

  // 8. One-click copy email
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", async () => {
      const email = copyEmailBtn.dataset.email || "prasanna4223@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email copied to clipboard");
      } catch {
        showToast(`Email: ${email}`);
      }
    });
  }

  // 9. Contact form -> direct email delivery (FormSubmit) + Gmail / Mail App options
  const RECIPIENT_EMAIL = "prasanna4223@gmail.com";
  const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const sendSubmitBtn = document.getElementById("sendSubmitBtn");
  const openGmailBtn = document.getElementById("openGmailBtn");
  const openMailtoBtn = document.getElementById("openMailtoBtn");

  const setFormStatus = (text, isError = false) => {
    if (!formStatus) return;
    formStatus.textContent = text;
    formStatus.classList.toggle("is-error", isError);
  };

  const getFormPayload = () => {
    const name = contactForm ? contactForm.name.value.trim() : "";
    const email = contactForm ? contactForm.email.value.trim() : "";
    const message = contactForm ? contactForm.message.value.trim() : "";
    const subject = name ? `Portfolio Inquiry from ${name}` : "Portfolio Inquiry";
    const body = message
      ? `Hi Prasanna,\n\n${message}\n\nBest regards,\n${name || "Visitor"}${email ? `\n(${email})` : ""}`
      : "Hi Prasanna,\n\n";
    return { name, email, message, subject, body };
  };

  const openInGmail = () => {
    const { subject, body } = getFormPayload();
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(RECIPIENT_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setFormStatus("Opened pre-filled message in Gmail.");
  };

  const openInMailApp = () => {
    const { subject, body } = getFormPayload();
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus("Opened pre-filled message in your default mail app.");
  };

  if (openGmailBtn) {
    openGmailBtn.addEventListener("click", openInGmail);
  }

  if (openMailtoBtn) {
    openMailtoBtn.addEventListener("click", openInMailApp);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const { name, email, message, subject } = getFormPayload();

      if (!name || !email || !message) {
        setFormStatus("Please fill out your name, email, and message.", true);
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setFormStatus("Please enter a valid email address.", true);
        return;
      }

      // FormSubmit requires an http(s) origin; if opened directly via file://, offer Gmail/Mail App immediately
      if (window.location.protocol === "file:") {
        openInGmail();
        setFormStatus("Direct send activates automatically once hosted (e.g. GitHub Pages). Opened your message in Gmail instead.");
        showToast("Opened in Gmail");
        return;
      }

      if (sendSubmitBtn) {
        sendSubmitBtn.disabled = true;
        sendSubmitBtn.textContent = "Sending...";
      }
      setFormStatus("Sending your message...");

      try {
        const response = await fetch(FORMSUBMIT_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _replyto: email,
            _subject: subject,
            _template: "table",
            _honey: contactForm._honey ? contactForm._honey.value : "",
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        contactForm.reset();
        setFormStatus("Message sent directly to prasanna4223@gmail.com. Thank you!");
        showToast("Message sent!");
      } catch {
        setFormStatus("Direct delivery wasn't reachable right now — click 'Open in Gmail' or 'Default Mail App' above to send immediately.", true);
        showToast("Use Gmail or Mail App to send");
      } finally {
        if (sendSubmitBtn) {
          sendSubmitBtn.disabled = false;
          sendSubmitBtn.textContent = "Send Message";
        }
      }
    });
  }

  // 10. Dynamic footer year
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
