var envie_algo = document.querySelector(".roll-options-1");
var envie_algo_2 = document.querySelector(".roll-options-2");
const opcoes_envio = [
  "Dúvida",
  "Sugestão",
  "Crítica",
  "Opnião",
  "Pergunta",
  "Elogio",
];
const opcoes_envio_2 = ["Uma", "Sua", "Uma", "Sua", "Uma", "Um"];
function trocar() {
  envie_algo.style.top = "-50px";
  envie_algo_2.style.top = "50px";
  var random_esc = Math.floor(Math.random() * 6);
  setTimeout(() => {
    envie_algo.innerHTML = opcoes_envio[random_esc];
    envie_algo_2.innerHTML = opcoes_envio_2[Math.floor(Math.random() * 5)];
    if (envie_algo.textContent == "Elogio") {
      envie_algo_2.innerHTML = "Um";
    }
    envie_algo.style.top = "0px";
    envie_algo_2.style.top = "0px";
  }, 600);
}

//forms things
var nome = document.querySelector("#name-field");
var nome_titulo = document.querySelector(".name-titulo");
var btn_avancar = document.querySelector(".btn-avancar");
var depoiment = document.querySelector(".depoimento");
var btn_envar = document.querySelector(".enviar_dados");
var caixa_btns = document.querySelector(".botoes");
var sessao_1 = document.querySelector(".front-main-use");
var sessao_2 = document.querySelector(".depoimentos_registrados");

function avancar() {
  if (btn_avancar.innerHTML != "Voltar") {
    if (nome.value != "") {
      btn_avancar.innerHTML = "Voltar";
      nome_titulo.innerHTML = nome.value;
      nome.style.display = "none";
      nome_titulo.style.margin = "10px auto 10px auto";
      btn_avancar.style.margin = "auto auto 10px 10px";
      depoiment.style.display = "block";
      depoiment.style.height = "100%";
      btn_envar.style.opacity = "1";
      caixa_btns.style.flexDirection = "row";
      caixa_btns.style.height = "fit-content";
      btn_envar.addEventListener("click", enviar_dados);
    }
  } else {
    btn_avancar.innerHTML = "Avançar";
    nome_titulo.innerHTML = "Nome";
    nome.value = "";
    nome.style.display = "block";
    depoiment.style.display = "none";
    nome_titulo.style.margin = " 120px auto 0px auto";
    btn_avancar.style.margin = "10px auto";
    caixa_btns.style.flexDirection = "column";
    caixa_btns.style.height = "46%";
    btn_envar.style.opacity = "0";
    btn_envar.removeEventListener("click", enviar_dados);
  }
}

function enviar_dados() {
  if (depoiment.value == "") {
    depoiment.style.border = "2px solid red";
    depoiment.style.borderStyle = "dashed";
  } else {
    alert("Obrigado pelo Depoimento!");
    sessao_1.style.left = "-100%";
    sessao_2.style.left = "0%";
  }
  setTimeout(() => {
    mostrar()
  }, 100);
}

var lista_depoimentos = document.querySelector('.depoimentos')
function setar_depois() 
{
  var depoi_regis = document.querySelectorAll(".depoi");
  depoi_regis.forEach(function(elemento,index){
    elemento.addEventListener("click", () => {
      elemento.classList.toggle("ampliado");
    })
  })
}