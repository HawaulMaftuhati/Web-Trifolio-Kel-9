const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

const track = document.getElementById("projectTrack");
const cards = [...track.children];
const dots = document.getElementById("dots");
let current = 0;

cards.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot-slide" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", `Project ${i + 1}`);
  dot.addEventListener("click", () => goTo(i));
  dots.appendChild(dot);
});

function goTo(index) {
  current = Math.max(0, Math.min(index, cards.length - 1));
  track.scrollTo({ left: track.clientWidth * current, behavior: "smooth" });
  [...dots.children].forEach((d, i) => d.classList.toggle("active", i === current));
}

document.getElementById("prevBtn").addEventListener("click", () => goTo(current - 1));
document.getElementById("nextBtn").addEventListener("click", () => goTo(current + 1));

window.addEventListener("resize", () => goTo(current));
document.getElementById("year").textContent = new Date().getFullYear();
