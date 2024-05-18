let num = document.getElementById('fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores =[]

function isNumero(n) {
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inLista(n,l) {
    //varre o vetor para verificar se já exite o numero digitado 
    if(l.indexOf(Number(n)) != -1) { //se no vetor o indexOf do number de n for diferente de -1 "O valor não foi encontrado no vetor."
        return true
    }else {
        return false
    }
}

function adicionar(){
    
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //adiciona o numero digitado ao vetor
        let item = document.createElement('option') 
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //limpa o campo que você digitou o número
    num.focus() //coloca o cursor no campo pronto para digitar o proximo numero
}
 function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let cont = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma =  0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior){
                maior=valores[pos]
            }
            if(valores[pos] < menor){
                menor=valores[pos]
            }
        }
        //valores.sort((a,b) => a-b)
        //let menor = valores[0]
        media = soma / cont
        //maior = valores[valores.length-1]
        res.innerHTML=''
        res.innerHTML+= `<p>Foram cadastrados ${cont} elementos.</p>`
        res.innerHTML+= `<p>O maior valor é ${maior}.</p>`
        res.innerHTML+= `<p>O menor valor é ${menor}.</p>` 
        res.innerHTML+= `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML+= `<p>A média dos valores é ${media}.</p>`
    }
 }