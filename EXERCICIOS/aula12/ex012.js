var agora = new Date()
console.log(`As horas agora são ${agora} Hs`)
var horas = agora.getHours()
var minutos = agora.getMinutes()

if (horas<6){
    console.log(`Boa madrugada, agora são: ${horas}:${minutos}`)
}else if(horas<12){
    console.log(`Bom dia, agora são: ${horas}:${minutos}`)
}else if(horas<18){
    console.log(`Boa tarde, agora são: ${horas}:${minutos}`)
}else{
    console.log(`Boa noite, agora são: ${horas}:${minutos}`)
}

