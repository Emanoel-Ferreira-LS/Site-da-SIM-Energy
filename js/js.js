const mostrarMenuOpen = document.getElementById("menu-retratil")
const menu = document.getElementById("menu-open")
const fecharMenu = document.querySelector(".fechar-menu")

mostrarMenuOpen.addEventListener('click', mostrarMenu)
fecharMenu.addEventListener('click', fecharMenuFuncao)

function fecharMenuFuncao(){
    menu.classList.add("esconder")
}

function mostrarMenu(){
    menu.classList.remove("esconder")
}
