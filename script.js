const header = document.querySelector(".header"); // Select the header
const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  header.classList.remove("nav-open"); // Add this line
});

openButton.addEventListener("click", () => {
  nav.classList.add("nav-open");
  header.classList.add("nav-open"); // Add this line
});

const DUR = 1200; // ms (tweak this: 600–1000 feels nice)
const HEADER_H = 56; // your fixed header height

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const el = document.querySelector(a.getAttribute("href"));
    if (!el) return;
    e.preventDefault();

    const start = scrollY,
      end = el.getBoundingClientRect().top + scrollY - HEADER_H;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / DUR); // 0 → 1
      const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; // easeInOutCubic
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
