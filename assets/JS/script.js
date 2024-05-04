//MENU HAMBURGER

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.navegacao-primaria');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

//ANIMAÇÃO TITULO DINAMICO

const titulo = document.querySelector('.digitando');

function ativaLetra(elemento){
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrayTexto.forEach((letra, i) =>{

        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);

    });
}

ativaLetra(titulo);

// Inicializar o Swiper

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
});

// Função Accordion

const accordions = document.querySelectorAll('.accordion-box');

for (let i = 0; i < accordions.length; i++) {
  const boxLabel = accordions[i].querySelector('.box-label');
  boxLabel.addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que o evento de clique se propague para o container .accordion-box
    accordions[i].classList.toggle('active');
    const icon = this.querySelector('.icon');
    icon.textContent = accordions[i].classList.contains('active') ? '-' : '+';
  });
}

// ANIMAÇÃO DE SCROLL SUAVE AO MUDAR DE SECTION

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth' // Adiciona um comportamento de rolagem suave
      });
  });
});
