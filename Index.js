// Desafio classificador de nível de herói
// Definindo o nome e a quantidade de experiência (XP) do herói
let nomeDoHeroi = "Exemplo";
let xpDoHeroi = 7000;

// Utilizando uma estrutura de decisão para determinar o nível do herói
let nivelDoHeroi;

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exibindo a mensagem com o nível do herói
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);

