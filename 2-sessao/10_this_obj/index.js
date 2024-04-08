let jogador_fla= {
    time:'flamengo',
    nome: 'Bruno Henrique',
    camisa:27,
    chute:'',
    funcao_principal:"atacante",
    chutar_para_esquerda:function(){
        console.log(`${this.nome} chutou no lado esquerdo`)
        this.chute = 'esquerdo';
    },
    chutar_para_direita:function(){
        console.log(`${this.nome} chutou no lado direito`)
        this.chute = 'direto';
    }
}
let jogador_iguacu= {
    time:'nova iguaçu',
    nome: 'Matheus',
    camisa:1,
    pulo:'',
    funcao_principal:"Goleiro",
    pular_direita:function(){
        console.log(`${this.nome} Pulou para a direita`)
        this.pulo = 'direto';
    },
    pular_esquerda:function(){
        console.log(`${this.nome} Pulou para a esquerda`)
        this.pulo = 'esquerdo';
    }
}

let placar = {
    time1:'flamengo',
    saldo_time1:0,
    time2:'Nova Iguaçu',
    saldo_time2:0,
    mostrar_placar : function(){
        console.log(`${this.time1} ${this.saldo_time1}X${this.saldo_time2} ${this.time2}`)
    }
    
}
console.log("==========Lance Perigoso======================")
placar.mostrar_placar()
jogador_fla.nome
jogador_fla.chutar_para_esquerda()
jogador_iguacu.nome
jogador_iguacu.pular_direita()

if(jogador_fla.chute != jogador_iguacu.pulo){
    console.log(`É Gooooooooool do mengãooooo, ${jogador_fla.nome} é nome dele`)
    placar.saldo_time1 +=1;

} else {
    console.log(`Defende o goleirão ${jogador_iguacu.nome}`)
}

placar.mostrar_placar()
console.log("=================================================")
