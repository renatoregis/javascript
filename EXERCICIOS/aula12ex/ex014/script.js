function carregar() {
    //CRIANDO UM OBJETO PARA APARECER NA MENSAGEM ATRAVES DOS ID
        //ESTES VÍNCULOS SERVEM PARA FAZER ALTERAÇÕES NOS TEXTOS ATRAVES DESTE OBJETO
    var msg = window.document.getElementById('msg') //VINCULANDO O OBJETO var msg A DIV msg ATRAVEZ DO WINDOW...
    var img = window.document.getElementById('imagem')//VINCULANDO O OBJETO var img A DIV imagem ATRAVEZ DO WINDOW...
    var data = new Date() //OBJETO DATA RECEBE A DATA DO SISTEMA QUE VEM HORAS, DATA, DIA SEMANA...
    var hora = data.getHours() //VARIAVEL HORA RECEBE APRENAS AS HORAS DO SISTEMA
    msg.innerHTML = `Agora são ${hora} horas.`//ATRAVES DA VARIAVEL msg MANDAMOS PARA A PAGINA A MENSAGEM COM A HORA DO SITEMA 
    if (hora >=0 && hora < 12){
        img.src = 'imagens/dia.png' //ATRAVES DESTE COMANDO ELE MANDA A IMAGEM RELACIONADA A HORAS DO SISTEMA PARA A PAGINA DO SITE
        document.body.style.background = '#FFE856' //ATRAVES DESTE COMANDO ELE MUDA A COR DE FUNDO DA PAGINA DO SITE
    }else if(hora>=12 && hora <=18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#EF961C'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#6C7E8B'
    }
}
