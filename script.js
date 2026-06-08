const navLinks = document.querySelectorAll("nav a");
const themeToggle = document.getElementById("themeToggle");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(item => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Default is dark mode
const savedTheme = localStorage.getItem("avraura-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "☾";
} else {
  document.body.classList.remove("light-mode");
  themeToggle.textContent = "☀︎";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("avraura-theme", "light");
    themeToggle.textContent = "☾";
  } else {
    localStorage.setItem("avraura-theme", "dark");
    themeToggle.textContent = "☀︎";
  }
});