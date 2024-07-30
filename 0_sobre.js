const toggleSobre = document.getElementById("toggle-sobre");
const contentSobre = document.getElementById("content-sobre");

// Função para expandir/contrair
toggleSobre.addEventListener("click", () => {
  contentSobre.classList.toggle("show");
});
