const root = document.documentElement;
const progressBar = document.querySelector(".scroll-progress span");
const sections = document.querySelectorAll("section.resume-section");

const updateProgress = () => {
  if (!progressBar) {
    return;
  }
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

const handleMouseMove = (event) => {
  root.style.setProperty("--cursor-x", `${event.clientX}px`);
  root.style.setProperty("--cursor-y", `${event.clientY}px`);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
window.addEventListener("mousemove", handleMouseMove, { passive: true });

updateProgress();
