//Variavel que faz funcionar o botão de ligar
const turnOn = document.getElementById('turnOn');
//Variavel que faz funcionar a função de desligar
const turnOff = document.getElementById('turnOff');
//aqui ele está dizendo que a lâmpada é que terá a função
const lamp = document.getElementById('lamp');

//Função que diz para o código checar para ver se a imagem está quebrada
function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

//Função que diz se a imagem não estiver quebrada (!), ao clicar em "ligar" ligue a lâmpada
function lampOn (){
    if (!isLampBroken()){
        lamp.src = './ligada.jpg';
    }
}

//Função que diz se a imagem não estiver quebrada, que ao clicar em "desligar" desligue a lâmpada
function lampOff(){
    if (!isLampBroken()){
        lamp.src = './desligada.jpg';
    }
}

//Informa para aparecer a imagem da lâmpada quebrada
function lampBroken(){
    lamp.src = './quebrada.jpg';
}

//Quando clicar em "ligar" ela liga
turnOn.addEventListener ('click', lampOn);
//Quando clicar em "desligar" ela desliga
turnOff.addEventListener ('click', lampOff);
//Quando passar o mouse por cima da lâmpada ela também liga
lamp.addEventListener ('mouseover', lampOn);
//Quando tirar o mouse de cima da lâmpada ela apaga
lamp.addEventListener ('mouseleave', lampOff);
//Quando der dois clicks na lâmpada, ela quebra
lamp.addEventListener ('dblclick', lampBroken);
