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
   console.log(oroche.estado);
   naruto.atirar_shuriken();
   console.log(oroche.estado);
