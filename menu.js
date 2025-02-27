
// Seleciona os elementos HTML com os IDs 'btn-menu', 'menu-mobile' e 'overlay-menu'
let btnMenu = document.getElementById('btn-menu'); // Botão que abre o menu
let menu = document.getElementById('menu-mobile'); // Menu mobile
let overlay = document.getElementById('overlay-menu'); // Overlay (fundo escuro) do menu

// Adiciona um ouvinte de evento 'click' ao botão 'btnMenu'
btnMenu.addEventListener('click', () => {
    // Quando o botão é clicado, adiciona a classe 'abrir-menu' ao elemento 'menu'
    // Essa classe provavelmente contém estilos CSS que fazem o menu aparecer na tela
    menu.classList.add('abrir-menu');
});

// Adiciona um ouvinte de evento 'click' ao menu 'menu'
menu.addEventListener('click', () => {
    // Quando qualquer parte do menu é clicada, remove a classe 'abrir-menu' do elemento 'menu'
    // Isso fecha o menu, provavelmente removendo os estilos CSS que o faziam aparecer
    menu.classList.remove('abrir-menu');
});

// Adiciona um ouvinte de evento 'click' ao overlay 'overlay'
overlay.addEventListener('click', () => {
    // Quando o overlay é clicado, remove a classe 'abrir-menu' do elemento 'menu'
    // Isso fecha o menu, permitindo que o usuário feche o menu clicando fora dele
    menu.classList.remove('abrir-menu');
});