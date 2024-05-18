let vetor = [5,8,2,9,3]
console.log(vetor)
vetor.push(33,4)
vetor.push(11)
vetor.push(22)
console.log(vetor)
vetor.sort((a,b) => a - b);
console.log(vetor)
console.log(`O vetor tem ${vetor.length} posições.`)
console.log(`O vetor de índice 0 tem o elemento ${vetor[0]}`)
for (let pos=0;pos<vetor.length;pos++){
    console.log(`O elemento no indice ${pos} é ${vetor[pos]}`)
}