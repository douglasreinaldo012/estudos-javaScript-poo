function ninja(nome,qtdshuriken){
 this.nome = nome;
 this.qtdshuriken = qtdshuriken;
 this.atirar_shuriken = function(){
    if(this.qtdshuriken>0){
    
    console.log("atirou shuriken!");
    this.qtdshuriken = this.qtdshuriken - 1;
    }else{
        console.log("Suas shurikens acabaram!")
    };
};
}
let naruto = new ninja("Naruto",3);
console.log(naruto.nome);
naruto.atirar_shuriken();
naruto.atirar_shuriken();
naruto.atirar_shuriken();
naruto.atirar_shuriken();
naruto.atirar_shuriken();