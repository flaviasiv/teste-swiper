let lastScrollTop = 0; // Armazena a posição anterior do scroll
const header = document.querySelector(".navbar"); // Seleciona o header fixo

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll para baixo: esconde o header
    header.style.transform = "translateY(-100%)";
  } else {
    // Scroll para cima: mostra o header
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos no topo da página
});
