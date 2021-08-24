//Função que calcula o IMC
function imc(peso, altura){
    calc = peso/(altura ^2);
    return calc;
}

// Recebe o valor que retorna da função imc
let vari = imc(93, 1.76);

//Informa o nivel do IMC
console.log(`Seu IMC é ${vari}`)
if (vari < 18.5){
    console.log(`Seu IMC é ${vari} e você esta na faixa de magreza`);
}else if(vari >= 18.5 && vari <= 24.9 ){
console.log(`Seu IMC é ${vari} e você esta no nivel Normal`);
}else if (vari > 24.9 && vari <= 29.9) {
    console.log(`ATENÇÃO! Seu IMC é ${vari} e você esta no nivel de SobrePeso I`);
}else if(vari > 29.9 && vari <= 39.9){
    console.log(`CUIDADO! Seu IMC é ${vari} e você esta no nivel de Obesidade II`);
}else{`RISCO DE VIDA! Seu IMC é ${vari} e você esta no nivel de Obesidade grave III`}
