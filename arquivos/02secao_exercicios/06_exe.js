function comparaobj(obj1 , obj2){
    if(obj1 instanceof obj2){
        console.log("O " + obj1.nome + " é uma instancia do " + obj2.name);
    }else{
        console.log("O " + obj1.nome + " não é uma instancia do " + obj2.name);
    };

};
function ninja(nome,qtdshuriken){
    this.nome = nome;
    this.qtdshuriken = qtdshuriken;
    this.atirar_shuriken = function(inimigo){
       if(this.qtdshuriken>0){
       oroche.estado = "Morto";
       console.log("atirou shuriken!");
       this.qtdshuriken = this.qtdshuriken - 1;
       }else{
           console.log("Suas shurikens acabaram!")
       };
   };
   }
   function inimigo(nome){
    this.nome = nome;
    this.estado = "vivo";
   }
   let oroche = new inimigo("oroche");
   let naruto = new ninja("naruto",4);
   comparaobj(oroche,inimigo);
   
