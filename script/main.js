function mudaTitle(title) {document.title = title}

function toggleMenu(event) {
    if (event.type === 'touchstart' || event.type === 'click') event.preventDefault()
    
    const $menu = document.querySelector('.menu')
    const $icone = document.querySelector('.fas')

    $menu.classList.toggle('active')
    $icone.classList.toggle('fa-solid')
    $icone.classList.toggle('fa-xmark')

    const $active = $menu.classList.contains('active')
    if (event.type === 'touchstart' || event.type === 'click') event.currentTarget.setAttribute('aria-expanded', $active)
    else event.setAttribute('aria-expanded', $active)

    const $menu__container_active = document.querySelector('.menu.active .menu__container')

    if ($active) {        
        document.documentElement.style.overflow = 'hidden'

        let altura_menu__container = parseFloat($cabecalhoPrincipal.offsetHeight)
        $menu__container_active.style.height = `calc(100vh - ${altura_menu__container}px)`

        $menu__container.style.top = getComputedStyle($cabecalhoPrincipal).height
    } else {
        document.documentElement.style.overflow = 'auto'
        $menu__container.style.height = 0
    }
}

function sobreMim() {
    $botaoFechar.style.display = 'block'
    $fundoDesfocado.style.display = 'block'
    $visible.classList.toggle('visible')
    $pageScroll.style.overflow = 'hidden'
    mudaTitle('Lucas R. Marcondes | Sobre Mim')
    $sobreMim_cabecalho.style.animation = 'fadeIn 500ms linear'
}

function botaoFechar() {
    $botaoFechar.style.display = 'none'
    setTimeout(() => {
        $fundoDesfocado.style.display = 'none'
        $visible.classList.toggle('visible')
        $pageScroll.style.overflow = 'auto'
        mudaTitle(pageTitle)
    }, 250)
    $sobreMim_cabecalho.style.animation = 'fadeOut 300ms linear'
}

function atualizarAnoRodape() {
    const $anoRodape = document.querySelector('#anoAtual')
    $anoRodape.innerHTML = new Date().getFullYear()
}

const $pageScroll = document.documentElement
const $cabecalhoPrincipal = document.querySelector('.cabecalhoPrincipal')
const $menu__container = document.querySelector('.menu__container')
const $visible = document.querySelector('.visible')
const $fundoDesfocado = document.querySelector('.fundoDesfocado')
const $linkSobreMim = document.querySelector('#linkSobreMim')
const $sobreMim_cabecalho = document.querySelector('.sobreMim__cabecalho')
const $botaoFechar = document.querySelector('#sobreMim__btnFechar')
const $mobileMenu = document.querySelector('#btnMobileMenu')
const $contatos = document.querySelector('#contatos')
let pageTitle = document.title

if (parseFloat($cabecalhoPrincipal.offsetHeight) > 75) {
    $menu__container.style.top = parseFloat($cabecalhoPrincipal.offsetHeight) + 'px'
}

$mobileMenu.addEventListener('click', toggleMenu)
$contatos.addEventListener('click', () => { 
    if($mobileMenu.children[0].classList.contains('fa-xmark')) toggleMenu($mobileMenu)
})

$linkSobreMim.addEventListener('click', sobreMim)
$botaoFechar.addEventListener('click', botaoFechar)

window.addEventListener("resize", debounce(() => {
    $menu__container.style.top = parseFloat($cabecalhoPrincipal.offsetHeight) + 'px'

    if($mobileMenu.children[0].classList.contains('fa-xmark')) toggleMenu($mobileMenu)
    
    console.log($mobileMenu.getAttribute('aria-expanded'))
    if (innerWidth >= 992) {
        console.log("oi")
        $menu__container.style.height = 'auto'
        $menu__container.style.top = 0
    } else {
        $menu__container.style.height = 0
    }
}))

atualizarAnoRodape()

