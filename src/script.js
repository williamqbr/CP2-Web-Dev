var nome = prompt("Digite seu nome:");
while (nome == "") {
    alert("Nome obrigatório!");
    nome = prompt("Digite seu nome:");
}
console.log('nome do usuário: ' + nome);

var sobrenome = prompt("Digite seu sobrenome:");
while (sobrenome == "") {
    alert("Sobrenome obrigatório!");
    sobrenome = prompt("Digite seu sobrenome:");
}
console.log('sobrenome do usuário: ' + sobrenome);

alert('Olá, ' + nome + " " + sobrenome + '! Agora vamos aos vinhos...');

let repetir = true;  //while
let contadorCadastros = 0; //contador

while (repetir) {
    var nomeVinho = prompt('Qual o nome do vinho?');

  while(nomeVinho == "") {
    alert("O nome do vinho é obrigatório");
    var nomeVinho = prompt("Insira o nome do vinho: ");
  }
console.log("Nome do vinho: " + nomeVinho);

  var tipoVinho = prompt('Qual o tipo do vinho? (Tinto, Branco ou Rosé)');
  if (tipoVinho == "tinto") {
    alert("Vinho Tinto");
  } 
  else if (tipoVinho == "branco") {
    alert("Vinho Branco");
  } 
  else if (tipoVinho == "rosé" || tipoVinho == "rose") { 
    alert("Vinho Rosé");
  } 
  else {
    alert("Tipo inválido! Só aceitamos: Tinto, Branco ou Rosé... Tente de novo.");
    var tipoVinho = prompt('Por favor, digite o tipo do vinho:')
  }
console.log("Tipo do vinho: " + tipoVinho);

 var safraVinho = prompt('Qual o ano do vinho?'); 
  while (safraVinho === "" || isNaN(safraVinho)) {
    safraVinho = prompt("Digite um ano válido para a safra:");
  }
 safraVinho = parseInt(safraVinho);

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
console.log("Sua Safra: " + safraVinho);

 alert("Classificação do vinho: " + classificacao);
console.log("Classificação do vinho: " + classificacao);

 var quantidadeVinho = prompt('Qual sua quantidade no estoque?');
  while (quantidadeVinho == "" || isNaN(quantidadeVinho)) {
    quantidadeVinho = prompt("Digite uma quantidade válida:");
  }

 quantidadeVinho = parseInt(quantidadeVinho);

 var estoque = "Estoque adequado";
  if (quantidadeVinho <= 5) {
    estoque = "Estoque BAIXO";
  }

 alert("Situação do estoque: " + estoque);

 contadorCadastros++;

 console.log("Nº do Cadastro " + contadorCadastros);
 console.log("Quantidade no estoque: " + quantidadeVinho);
 console.log("Situação que estoque se encontra: " + estoque);
 console.log("");

 repetir = confirm("Para inserir outro vinho clique em ''ok'' ");
}

let i;
for (i = 1; i <= contadorCadastros; i++) {
  console.log("Vinho nº " + i + " cadastrado com sucesso.");
}

alert('Cadastro finalizado! Foram cadastrados ' + contadorCadastros + ' vinho(s). Veja os detalhes no console');
