var nome = prompt("Digite seu nome:");

while (nome === "") {
    alert("Nome obrigatório!");
    nome = prompt("Digite seu nome:");
}

console.log('nome do usuário: ' + nome);

var sobrenome = prompt("Digite seu sobrenome:");

while (sobrenome === "") {
    alert("Sobrenome obrigatório!");
    sobrenome = prompt("Digite seu sobrenome:");
}

console.log('sobrenome do usuário: ' + sobrenome);

alert('Olá, ' + nome + " " + sobrenome + '! Agora vamos aos vinhos...');

let repetir = true;  //while
let contadorCadastros = 0; //contador

var contadorEstoqueBaixo = 0; 
var vinhoMaisAntigo = null;

while (repetir) {
  
 var nomeVinho = prompt('Qual o nome do vinho?');

  while(nomeVinho == "") {
    alert("O nome do vinho é obrigatório");
    var nomeVinho = prompt("Insira o nome do vinho: ");
  }

  var tipoVinho = prompt('Qual o tipo do vinho? (Tinto, Branco ou Rosé)');

  if (tipoVinho === "tinto") {
    alert("Vinho Tinto");
  } 
  else if (tipoVinho === "branco") {
    alert("Vinho Branco");
  } 
  else if (tipoVinho === "rosé" || tipoVinho === "rose") { 
    alert("Vinho Rosé");
  } 
  else {
    alert("Tipo inválido! Só aceitamos: Tinto, Branco ou Rosé... Tente de novo.");
    var tipoVinho = prompt('Por favor, digite o tipo do vinho:')
  }

 var safraVinho = prompt('Qual o ano do vinho?'); 

  while (safraVinho === "" || isNaN(safraVinho)) {
    safraVinho = prompt("Digite um ano válido:");
  }
 safraVinho = parseInt(safraVinho);

 if (vinhoMaisAntigo === null || safraVinho < vinhoMaisAntigo) {
    vinhoMaisAntigo = safraVinho;
 }

 var classificacao;                                      
  if (safraVinho >= 2020) {
    classificacao = "Vinho jovem";
  } 
  else if (safraVinho >= 2015) {
    classificacao = "Vinho amadurecido";
  } 
  else {
    classificacao = "Vinho antigo";
  }

 alert("Classificação do vinho: " + classificacao);

 var quantidadeVinho = prompt('Qual sua quantidade em estoque?');

  while (quantidadeVinho === "" || isNaN(quantidadeVinho)) {
    quantidadeVinho = prompt("Digite uma quantidade válida:");
  }

 quantidadeVinho = parseInt(quantidadeVinho);

 var estoque = "Estoque adequado";
  if (quantidadeVinho <= 5) {
    estoque = "Estoque BAIXO";
    contadorEstoqueBaixo++;
  }

 alert("Situação do estoque: " + estoque);

 contadorCadastros++;

 console.log("Nº do Cadastro " + contadorCadastros);
 console.log("Nome do vinho: " + nomeVinho);
 console.log("Tipo do vinho: " + tipoVinho);
 console.log("Safra do vinho: " + safraVinho);
 console.log("Classificação do vinho: " + classificacao);
 console.log("Quantidade em estoque: " + quantidadeVinho);
 console.log("Situação em que o estoque se encontra: " + estoque);
 console.log("");

 repetir = confirm("Deseja inserir um novo vinho?");

}

alert('Cadastro finalizado! Foram cadastrados ' + contadorCadastros + ' vinho(s). Veja os detalhes no console');

alert("Quantidade de vinhos com estoque BAIXO: " + contadorEstoqueBaixo);
alert("Safra mais antiga: " + vinhoMaisAntigo);

console.log("Vinhos com estoque baixo: " + contadorEstoqueBaixo);
console.log("Menor Safra: " + vinhoMaisAntigo );
