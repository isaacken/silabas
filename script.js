var palavras = [
  ['es','pe','lho'],
  ['cas','te','lo'],
  ['a','be','lha'],
  ['en','xa','guar'],
  ['sa','ú','de'],
  ['ár','vo','re'],
  ['ja','bu','ti','ca','ba'],
  ['a','ba','ca','te'],
  ['a','ma','re','lo'],
  ['cin','za'],
  ['di','nhei','ro'],
  ['brin','que','do'],
  ['mo','chi','la'],
  ['pa','ra','le','le','pí','pe','do'],
  ['in','cons','ti','tu','cio','na','lis','ci','ma','men','te'],
  ['pneu','mo','ul','tra','mi','cros','co','pi','cos','si','li','co','vul','ca','no','co','ni','ó','ti','co']
];

var pontuacao = 0;
var vidas = 3;
var indexAtual;
var palavraAtual;
var palavrasTentadas = new Array();
var tentativas = 0;

function geraPalavra() {
  if (vidas > 0) {
	  if (palavrasTentadas.length < palavras.length || palavrasTentadas.length <= 10) {
		let index;
		do {
		  index = Math.floor(Math.random()*palavras.length);
		} while (palavrasTentadas.includes(index));

		indexAtual = index;
		palavraAtual = palavras[indexAtual];
		palavrasTentadas.push(indexAtual);
	  } else {
		alert("Parabéns! Você acertou " + pontuacao + " de " + palavras.length + " palavras.");
		location.href="index.html";
	  }
  } else {
	  alert("Você perdeu :( mas não desanime, tente novamente!");
	  location.href="index.html";
  }
	  $("#palavra").html(palavraAtual);
}

function processarResposta() {
  return $("#entrada").val().split(" ");
}

$("#responder").on("click", function() {
  tentativas++;

  let silabas = processarResposta();

  let ok = true;palavras.length
  for (i=0; i < palavraAtual.length; i++) {
    if (palavraAtual[i] != silabas[i]) ok = false;
  }

  if (ok) {
    pontuacao++;
    alert("Resposta correta!");
  } else {
    vidas--;
    alert("Resposta errada :(");
  }
  
  $("#vidas").html(vidas);
  $("#pontuacao").html(pontuacao +"/"+(tentativas));

  $("#entrada").val("");
  $("#entrada").focus();
  geraPalavra();
});

$(document).ready(function() {
  geraPalavra();
  $("#pontuacao").html("0/"+(tentativas));
});
