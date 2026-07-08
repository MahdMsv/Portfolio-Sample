//
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
});

// Navbar scroll state
const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  },
  { passive: true },
);

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
document
  .querySelectorAll(".nav-close-link")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open")),
  );

// Spotlight follows cursor
const spotlight = document.getElementById("spotlight");
window.addEventListener("mousemove", (e) => {
  spotlight.style.setProperty("--mx", e.clientX + "px");
  spotlight.style.setProperty("--my", e.clientY + "px");
});

// Hero role typing animation
const roles = [
  "Frontend Developer",
  "Web & UI Craftsman",
  "React Enthusiast",
  "Interface Engineer",
];
const typedEl = document.getElementById("typedRole");
let ri = 0,
  ci = 0,
  deleting = false;
function typeLoop() {
  const word = roles[ri];
  if (!deleting) {
    ci++;
    typedEl.textContent = word.slice(0, ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    ci--;
    typedEl.textContent = word.slice(0, ci);
    if (ci === 0) {
      deleting = false;
      ri = (ri + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 75);
}
typeLoop();

// Code block typing animation
const codeLines = [
  `<span class="tok-key">const</span> <span class="tok-fn">Hero</span> = () => {`,
  `  <span class="tok-key">const</span> [<span class="tok-fn">hovered</span>, <span class="tok-fn">setHovered</span>] = <span class="tok-fn">useState</span>(<span class="tok-key">false</span>);`,
  ``,
  `  <span class="tok-key">return</span> (`,
  `    <span class="tok-punc">&lt;</span><span class="tok-tag">section</span> <span class="tok-attr">className</span>=<span class="tok-str">"hero"</span><span class="tok-punc">&gt;</span>`,
  `      <span class="tok-punc">&lt;</span><span class="tok-tag">h1</span><span class="tok-punc">&gt;</span>Mahdi Mousavi<span class="tok-punc">&lt;/</span><span class="tok-tag">h1</span><span class="tok-punc">&gt;</span>`,
  `      <span class="tok-com">{/* built with care */}</span>`,
  `    <span class="tok-punc">&lt;/</span><span class="tok-tag">section</span><span class="tok-punc">&gt;</span>`,
  `  );`,
  `};`,
];
const codeEl = document.getElementById("codeTyped");
let lineIdx = 0;
function typeCodeLines() {
  if (lineIdx >= codeLines.length) {
    const cursor = document.createElement("span");
    cursor.className = "type-cursor";
    codeEl.appendChild(cursor);
    return;
  }
  const span = document.createElement("div");
  span.innerHTML = codeLines[lineIdx];
  span.style.opacity = "0";
  span.style.transition = "opacity .4s ease";
  codeEl.appendChild(span);
  requestAnimationFrame(() =>
    requestAnimationFrame(() => (span.style.opacity = "1")),
  );
  lineIdx++;
  setTimeout(typeCodeLines, 260);
}
setTimeout(typeCodeLines, 500);

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal:not(.in-view)");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

// Skill bar fill on view
const bars = document.querySelectorAll(".bar-fill");
const barIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.pct + "%";
        barIO.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 },
);
bars.forEach((b) => barIO.observe(b));

//  Contact form (demo only)
document.querySelector(".form-card").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  const original = btn.textContent;
  btn.textContent = "Message sent ✓";
  setTimeout(() => (btn.textContent = original), 2400);
  e.target.reset();
});
