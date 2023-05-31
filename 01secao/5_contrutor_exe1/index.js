function ninja(nome,arma,defesa,ataque){
this.nome = nome;
this.arma = arma;
this.defesa= defesa;
this.ataque = ataque;
this.atirar = function(){
    console.log("Ninja "+this.nome+" Atirou " + this.arma);
}
this.apresentacao = function(){
    console.log("--------Apresentação--------")
    console.log("Nome:"+this.nome);
    console.log("Arma:"+this.arma);
    console.log("Defesa:"+this.defesa);
    console.log("Ataque:"+this.ataque);
    console.log("----------------------------")
}
}

let ninja1 = new ninja('Rafael','sharukem',5,8);
let ninja2 = new ninja('Katarine',"bola de fogo",6,7);

ninja2.apresentacao();
ninja1.apresentacao();
ninja1.atirar();


