function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //PEGA O ANO DO SISTEMA EM 4 DÍGITOS
    var fano = document.getElementById('txtano')
    var res =  document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique o ano digitado.')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var sexo = ''
        if(fsex[0].checked){
            sexo = 'Homem'
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'rapaz.png')

            }else if (idade < 53){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }else{
            sexo = 'Mulher'
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute('src', 'menina.jpg')

            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'moca.jpg')

            }else if (idade < 53){
                //adulto
                img.setAttribute('src', 'adulta.jpg')

            }else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')

            }
        }
        res.style.textAlign = 'center'//centraliza o texto res
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }

}
