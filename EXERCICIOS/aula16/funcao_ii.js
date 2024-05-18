function soma(n1 , n2){
    return n1+n2
}
console.log(soma(2,4))

//NÃO PASSANDO UM DOS PARÂMETROS...

function soma(n1=0 , n2=0){ //PREDEFENINDO OS PARAMETROS CASO NÃO PASSE UM DOS VALORES DE PARAMETRO
    return n1+n2
}
console.log(soma(2,34))