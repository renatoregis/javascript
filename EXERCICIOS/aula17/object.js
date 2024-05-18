let amigo = {nome: 'Jose',
sexo:'M',
peso: 84.6,
engordar(p=0){
    console.log('Engordou')
    this.peso += p //é uma palavra auto referência ao objeto
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg.`)