$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000 // Altere o valor para definir o intervalo em milissegundos
    });

    // Mostrar texto ao clicar na imagem
    $('.carousel-item img').click(function() {
        $(this).siblings('.carousel-caption').find('.texto-detalhado').toggle();
    });
});

document.querySelector('#doar-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    const conteudoCopia = 'mpcambiaghi80@hotmail.com';
    navigator.clipboard.writeText(conteudoCopia).then(function() {
        alert('Chave PIX copiada!');
    }, function(err) {
        console.error('Erro ao copiar a chave PIX: ', err);
    });
});

