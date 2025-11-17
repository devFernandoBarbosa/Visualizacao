const btnMenu = document.getElementById("btn-menu");
const nav = document.querySelector(".navegacao");
btnMenu.addEventListener("click", function ativarBotao() {
  nav.classList.toggle("ativo");
  const estaAberto = nav.classList.contains("ativo");
  btnMenu.setAttribute("aria-expanded", estaAberto);
});
const linksMenu = document.querySelectorAll(".navegacao a");
linksMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("ativo");
    btnMenu.setAttribute("aria-expanded", false);
  });
});
const form = document.querySelector("form");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const check = document.getElementById("checkbox");
form.addEventListener("submit", function evento(e) {
  e.preventDefault();
  if (inputNome.value.length < 3) {
    alert("Nome deve ter pelo menos 3 caracteres");
    return;
  }
  if (!inputEmail.value.includes("@") || !inputEmail.value.includes(".")) {
    alert("Email inválido!");
    return;
  }
  if (!check.checked) {
    alert("Você precisa autorizar o uso dos dados!");
    return;
  }
  alert("Inscrição realizada com sucesso!");
  form.reset();
});
const observador = new IntersectionObserver(function(entradas){
    entradas.forEach(function(entrada){
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }
    });
});
const todosCards = document.querySelectorAll(".card");
todosCards.forEach(function(card){
    observador.observe(card);
});