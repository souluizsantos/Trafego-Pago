// Seleciona os elementos
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Adiciona o evento de clique
hamburger.addEventListener('click', () => {
    // Liga/Desliga a classe 'active' no menu
    menu.classList.toggle('active');
});

document.addEventListener('mousemove', (e) => {
  const trail = document.createElement('div');
  trail.className = 'trail';
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);

  // remove o ponto depois da animação
  setTimeout(() => {
    trail.remove();
  }, 800);
});

/*-----------------------------------------------------------------*/





