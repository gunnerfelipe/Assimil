// Obtém a posição atual do scroll da página
function getScrollPosition() {
    return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

// Verifica se o menu deve ser exibido ou escondido
function checkMenuVisibility() {
    var menu = document.getElementById('menu');
    var scrollPosition = getScrollPosition();
    if (scrollPosition > 20) {
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
    }
}

// Verifica a visibilidade do menu quando o usuário rolar a página
window.addEventListener('scroll', checkMenuVisibility);