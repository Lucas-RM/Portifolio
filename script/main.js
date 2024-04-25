function mudaTitle(title) {document.title = title}

function toggleMenu(event) {
    if (event != undefined && event.type === 'touchstart') event.preventDefault()
    const $menu = document.querySelector('.menu')
    const $icone = document.querySelector('.fas')

    $menu.classList.toggle('active')
    $icone.classList.toggle('fa-solid')
    $icone.classList.toggle('fa-xmark')

    const $active = $menu.classList.contains('active')
    if (event != undefined) event.currentTarget.setAttribute('aria-expanded', $active)

    if ($active) {
        document.documentElement.style.overflow = 'hidden'
    } else {
        document.documentElement.style.overflow = 'auto'
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
const $visible = document.querySelector('.visible')
const $fundoDesfocado = document.querySelector('.fundoDesfocado')
const $linkSobreMim = document.querySelector('#linkSobreMim')
const $sobreMim_cabecalho = document.querySelector('.sobreMim__cabecalho')
const $botaoFechar = document.querySelector('#sobreMim__btnFechar')
const $mobileMenu = document.querySelector('#btnMobileMenu')
const $contatos = document.querySelector('#contatos')
let pageTitle = document.title

$mobileMenu.addEventListener('click', toggleMenu)
$contatos.addEventListener('click', (event) => { 
    if($mobileMenu.children[0].classList.contains('fa-xmark')) toggleMenu(event)
})

$linkSobreMim.addEventListener('click', sobreMim)
$botaoFechar.addEventListener('click', botaoFechar)

window.addEventListener("resize", debounce(() => {
    if($mobileMenu.children[0].classList.contains('fa-xmark')) toggleMenu()
}))

atualizarAnoRodape()

