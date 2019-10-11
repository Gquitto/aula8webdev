class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundaNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        if (this.media() > 6) {
            return "Aprovado";
        }
        return "Reprovado";
    }
}

let alunos = [
    new Aluno("Guilherme", "Quittó", 7, 4),
    new Aluno("Jonathan", "Dias", 10, 9),
    new Aluno("Leandro", "Almeida", 5, 9),
    new Aluno("Leonardo", "Lotaif", 2, 9),
    new Aluno("Matheus", "Gomes", 7, 9),
    new Aluno("Vinícius", "Souza", 7, 1)
]

function verAlunos(lista) {
    lista.forEach(element => {
        console.log("Aluno: " + element.primeiroNome + " " + element.segundoNome + " " + element.situacao());
    });
}

verAlunos(alunos);