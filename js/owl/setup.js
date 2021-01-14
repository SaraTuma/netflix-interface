$('.owl-carousel').owlCarousel({
    loop: true, //loop do carrossel
    margin: 10, //margem entre as capas 
    nav: false, //botões de navegação
    responsive:{ //adaptação do conteúdo ao tamanho da tela (itens por pixel)
        0:{ items: 1 }, 
        600:{ items: 3 }, 
        1000:{ items: 5 }
    }
})
