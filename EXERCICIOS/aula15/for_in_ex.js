//preenche por sorteio os numeros do vetor
//Math.floor() => arredonda para imediatamente menor o numero sorteado convertendo em numero inteiro.
//Math.random() => sorteia um numero aleatório
//min + Math.random() * (máx - min) => sorteia um numero real entre o valor minimo e o valor máximo
//vetor.indexOf(n) => faz uma varredura no vetor e verifica se o numero já consta no vetor.
//Se consta retorna o numero do indice caso não conste retorna -1

let vetor = []
let x
for( let c=0; c<5;c++){ 
    //vetor[c] = Math.floor(1 + Math.random() * (99 - 1)) 
    x = Math.floor(1 + Math.random() * (99 - 1))
    if(vetor.length==0){
        vetor[c]=x
    }
    if (vetor.indexOf(x) == -1){
        vetor[c] = x
    }else{
        console.log(`O numero ${x} já foi sorteado`)
        c=c-1
    }
}

for (let pos in vetor){
    console.log(`Na ${Number(pos)+1} posição de índice ${pos} se encontra o valor ${vetor[pos]}.`)
}
