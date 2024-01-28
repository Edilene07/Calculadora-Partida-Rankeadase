let vitorias = 100
let derrotas = 47
const resultado = nivelRanqueadas(vitorias, derrotas)

function nivelRanqueadas(vitorias,derrotas) {
    let saldoRanqueadas = vitorias - derrotas
    let nivel

    if (saldoRanqueadas <10) {
        nivel = "Ferro"
    } else if (saldoRanqueadas >= 11 && saldoRanqueadas <=20) {
        nivel = "Bronze"
    } else if (saldoRanqueadas >= 21 && saldoRanqueadas <= 50) {
        nivel = "Prata"
    } else if (saldoRanqueadas >= 51 && saldoRanqueadas <= 80) {
        nivel = "Ouro"
    } else if (saldoRanqueadas >= 81 && saldoRanqueadas <= 90) {
        nivel = "Diamante"
    } else if (saldoRanqueadas >= 91 && saldoRanqueadas <= 100) {
        nivel = "Lendario"
    } else if (saldoRanqueadas >= 101){
        nivel = "Imortal"
    }

    return "O Herói tem saldo de ${saldoRanqueadas} está no nivel de ${nivel}"
}

console.log(resultado);