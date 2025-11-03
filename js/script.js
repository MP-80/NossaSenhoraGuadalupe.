$(document).ready(function () {
  // Tempo de transição do carrossel
  $('.carousel').carousel({
    interval: 4000 // 4 segundos entre slides
  });

  // Mostrar texto ao clicar na imagem
  $('.carousel-item img').on('click', function () {
    $(this).siblings('.carousel-caption').find('.texto-detalhado').toggle();
  });

  // Copiar chave PIX ao clicar
  const doarLink = document.querySelector('#doar-link');
  if (doarLink) {
    doarLink.addEventListener('click', function (event) {
      event.preventDefault();
      const conteudoCopia = 'mpcambiaghi80@hotmail.com';
      navigator.clipboard.writeText(conteudoCopia).then(
        () => alert('Chave PIX copiada!'),
        (err) => console.error('Erro ao copiar a chave PIX: ', err)
      );
    });
  }
});
