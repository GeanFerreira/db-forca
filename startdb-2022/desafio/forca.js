const validarEtapa = require("../validacao/validar-etapa");
const regex = /[a-z]/i;

class Forca {

    constructor(dica) {
        this.dica = dica;
        this.buscaDados = {
            letrasChutadas: [],
            vidas: 6,
            palavra: []
        };
        this.vetor();
    }

    chutar(letra) {
        if(!this.ehLetra(letra)) {
            let compara = this.dica.includes(letra)
            this.buscaDados.letrasChutadas.push(letra)

            if(compara) {
                for(let i in this.dica) {
                    this.dica[i] === letra && (this.buscaDados.palavra[i] = letra)
                }
            } else{
                this.buscaDados.vidas--;
            }

            return true;
        }
    }

    vetor() {
        for(let i in this.dica) this.buscaDados.palavra.push('_');
    }

    buscarEstado() {
     if(this.buscaDados.palavra.join("") === this.dica && this.buscaDados.vidas > 0) {
            return (this.buscaDados.estado = "ganhou");
     } else if(this.buscaDados.vidas === 0) {
         return (this.buscaDados.estado = "perdeu");
     }
    } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

    ehLetra(letra) {
        if(letra > 1) {
            console.log("Somente uma letra é permitida");
            return true;
        }
        if(!regex.test(letra)) {
            console.log("Somente letras são permitidas");
            return true;
        }
        if(this.buscaDados.letrasChutadas.includes(letra)) {
            console.log("Letra já foi chutada");
            return true;
        }
        return false;
    }

    buscarDadosDoJogo() {
        return this.buscaDados;
    }
}

module.exports = Forca;
