/**
 * Throttling e debouncing são técnicas que ajudam a limitar a taxa de chamadas de uma função.
 * 
 * Ao utilizar essas técnicas, poço garantir que meu site não seja sobrecarregado com chamadas desnecessárias 
 * de função durante eventos de redimensionamento.
 * 
 * Throttling limita a taxa de chamadas de função, garantindo que a função seja chamada no máximo uma vez a cada ‘x’ milissegundos.
 * 
 * Debouncing, por outro lado, agrupa várias chamadas de função juntas e chama a função apenas uma vez após um determinado 
 * intervalo de tempo ter passado.
 * 
 */
function debounce(func, wait) {
    let timeout
    return function () {
        const context = this
        const args = arguments

        clearTimeout(timeout)

        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}
