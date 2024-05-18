
$(document).ready(function(){
    $('.products__carousel').slick({
        infinite: true,
        slidesToShow: 3, // Muestra 3 diapositivas por vez en pantallas grandes
        slidesToScroll: 1, // Desplaza una diapositiva por vez
        arrows: true, // Muestra flechas de navegación
        dots: true, // Muestra indicadores de navegación (puntos)
        responsive: [
            {
                breakpoint: 768, // Cuando el ancho de la pantalla es menor o igual a 768px
                settings: {
                    slidesToShow: 2, // Muestra 2 diapositivas por vez
                    slidesToScroll: 1 // Desplaza una diapositiva por vez
                }
            },
            {
                breakpoint: 480, // Cuando el ancho de la pantalla es menor o igual a 480px
                settings: {
                    slidesToShow: 1, // Muestra 1 diapositiva por vez
                    slidesToScroll: 1 // Desplaza una diapositiva por vez
                }
            }
        ]
    });
});