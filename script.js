function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    let res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO, está faltando dados.')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML='Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0 ) {
            res.innerHTML = 'Passo inválido. Considerando passo igual a 1: <br>'
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(var c=i; c <=f; c += p) {
                res.innerHTML += `\u{1F48E} ${c} `
            }
        } else {
            //contagem decrescente
            for(var c=i; c>=f; c-=p) {
                res.innerHTML += `\u{1F48E} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}