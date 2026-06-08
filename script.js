const revealItems = document.querySelectorAll('.cards article, .platform-card, .timeline div, .stack-card, .node-list div, .dashboard, .node-visual');

const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item) => {
  item.classList.add('hidden');
  reveal.observe(item);
});

const style = document.createElement('style');
style.innerHTML = `
.hidden { opacity: 0; transform: translateY(22px); transition: all 750ms ease; }
.show { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
