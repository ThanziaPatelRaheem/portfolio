const header = document.querySelector(".header");
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  header.classList.remove("nav-open");
});

openButton.addEventListener("click", () => {
  nav.classList.add("nav-open");
  header.classList.add("nav-open");
});

const DUR = 1200;
const HEADER_H = 56;

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const el = document.querySelector(a.getAttribute("href"));
    if (!el) return;
    e.preventDefault();

    nav.classList.remove("nav-open");
    header.classList.remove("nav-open");

    const start = scrollY,
      end = el.getBoundingClientRect().top + scrollY - HEADER_H;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / DUR);
      const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      scrollTo(0, start + (end - start) * ease);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
});

window.addEventListener("pageshow", function () {
  const form = this.document.getElementById("contactForm");

  if (form) {
    form.reset();
  }
});
