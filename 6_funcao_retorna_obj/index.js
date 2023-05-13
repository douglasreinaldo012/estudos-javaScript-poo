function pessoa(nome){
    return{
     nome : nome,
     peidou:function(){
        console.log("peidou");
     }
    } 
}
let pessoa1 = pessoa("Rafael");
console.log(pessoa1.nome)
pessoa1.peidou();

