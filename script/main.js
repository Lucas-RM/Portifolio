function mudaTitle(title) {document.title = title;}

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const $cabecalhoPrincipalNav = document.querySelector('.cabecalhoPrincipal-nav')
    const $icone = document.querySelector('.fas')

    $cabecalhoPrincipalNav.classList.toggle('active')
    $icone.classList.toggle('fa-solid')
    $icone.classList.toggle('fa-xmark')

    const $active = $cabecalhoPrincipalNav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', $active)

    if ($active) {
        document.documentElement.style.overflow = 'hidden'
    } else {
        document.documentElement.style.overflow = 'auto'
    }
}

const $pageScroll = document.documentElement
const $fundoDesfocado = document.querySelector('.fundoDesfocado')
const $visible = document.querySelectorAll('.visible')
const $linkSobreMim = document.querySelector('#linkSobreMim')
const $linkContatos = document.querySelector('#linkContatos')
const $botaoFechar = document.querySelector('#botaoFechar')
const $mobileMenu = document.querySelector('#mobile-menu')
let pageTitle = document.title

$linkSobreMim.addEventListener('click', () => {
    $fundoDesfocado.style.display = 'block'
    $visible[1].classList.toggle('visible')
    $pageScroll.style.overflow = 'hidden'
    mudaTitle('Lucas R. Marcondes | Sobre Mim')
})

$botaoFechar.addEventListener('click', () => {
    $fundoDesfocado.style.display = 'none'
    $visible[1].classList.toggle('visible')
    $pageScroll.style.overflow = 'auto'
    mudaTitle(pageTitle)
})

$linkContatos.addEventListener('click', () => {
    $visible[0].classList.toggle('visible')
})

$mobileMenu.addEventListener('click', toggleMenu)
