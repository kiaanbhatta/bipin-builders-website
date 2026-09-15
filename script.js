document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loading");

  window.setTimeout(() => {
    document.getElementById("loader").classList.add("done");
    document.body.classList.remove("loading");
  }, 1050);

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.getElementById("year").textContent = new Date().getFullYear();

  const form = document.getElementById("quoteForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    const service = data.get("service");
    const details = data.get("details");

    const message =
      `Hello Bipin Builders, I would like to request a quote.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Service: ${encodeURIComponent(service)}%0A` +
      `Project details: ${encodeURIComponent(details)}`;

    window.open(`https://wa.me/9779848756231?text=${message}`, "_blank", "noopener");
  });
});
