
console.log("Desafio classificador de nível de herói.")

let xpHero = [1000,2000,5000,7000,8000,9000,10000]; //array para armazenar o xp dos herói

// função para classificar o nível do herói baseado na experiência
function classificarHeroi(xp) { //declara a função. xp é o parâmetro da função 
    
    if (xp < 1000) {
        return "ferro";
    }
    else if (xp <= 2000) {
        return "bronze";
    }
    else if (xp <= 5000) {
        return "prata";
    }    
    else if (xp <= 7000) {
        return "ouro";
    }
    else if(xp <= 8000) {
        return "platina";
    }
    else if (xp <= 9000) {
        return "ascendente";
    }
    else if (xp <= 10000) {
        return "imortal";
    }
    else {
        return "radiante";
    }
    
}

//função principal

function main() {
    // nome do herói
    let nome = "Capitã Marvel";
    let continuar = true;
     
    while (continuar) {
        let xp = parseInt(prompt("Digite o XP do herói ou digite -1 para sair: ")); // Solicita o XP e converte para inteiro, além de solicitar um número para parar o loop do while
        if (xp === -1) { // condição para sair
            continuar = false;
            console.log("Fim da execução");
            console.log("Voltando ao menu inicial...");
        
        } else {
    
        // chamando a função pra classificar o herói
        let nivel = classificarHeroi(xp);

        // saída
        console.log(`O herói ${nome} com ${xp} está no nível ${nivel}`);
        
        }
    } 
} 

let reiniciar = true;
while (reiniciar) {
    main(); // chama a função principal novamente para retornar ao início

    let resposta = prompt("Deseja classificar novo XP? [S] / [N]: ")
    if (resposta === "S"){
        reiniciar = true; // reinicia se a condição for verdadeira
    } else (resposta === "N")
        reiniciar = false; // para o loop se a resposta for N.
        console.log("Fim da execução");
}




