$(document).ready(function(){
    $('.testimonial-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>'
    });
});

// Seleciona todos os links que apontam para IDs de seções
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = link.getAttribute('href').substring(1); // Obtém o ID do alvo
        const targetElement = document.getElementById(targetId); // Seleciona o elemento com o ID correspondente

        // Rolagem suave até o elemento alvo
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});



