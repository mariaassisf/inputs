
function boasVindas(){
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade')

    let novaDiv = document.createElement('div')
    let novop = document.createElement('p')

    let texto = document.createTextNode(`seu nome e ${nome.value} e sua idade e ${idade.value}.`)

    novop.appendChild(texto)

    novaDiv.appendChild(novop)

    document.body.appendChild(novaDiv)
}



let botao = document.querySelector('#botao')
botao.addEventListener('click', boasVindas)