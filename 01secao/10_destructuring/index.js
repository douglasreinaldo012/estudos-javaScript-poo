/*com detructuring é possível criar varias variaveis patindo
de um obj */
let carro ={
    banco :"couro",
    porta : 2,
    modelo:"celta",
    freio:"disco",
    cor:"preto"
};
let{banco,porta,modelo}=carro;
console.log(porta);
//modificando o valor da varivel sem modificar o valor que está no objeto
porta = 5;

console.log(porta);
console.log(carro.porta);
/*existe também a possibilidade de modifcar o valor de uma variável já existente
com o destructuring
*/
let cor ="azul";
console.log(cor);
let freio = "abs";
({freio,cor}=carro);
console.log(cor);