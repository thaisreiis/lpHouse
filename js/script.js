var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
}

var vejaMaisPage = document.querySelector(".veja-mais-page");
vejaMaisPage.addEventListener("click", function () {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  this.classList.toggle("active");

  /* Toggle between hiding and showing the active panel */
  var body = this.previousElementSibling;
  if (body.style.display === "grid") {
    body.style.display = "none";
  } else {
    body.style.display = "grid";
  }
});

window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".background-testemunhas");
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

/* VALIDAÇÃO FORMULARIO */

document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome");
    let telefone = document.getElementById("telefone");
    let mensagemErro = document.getElementById("mensagemErro");

    // Limpar qualquer mensagem de erro existente e remover a classe de erro
    mensagemErro.textContent = "";
    nome.classList.remove("input-error");
    telefone.classList.remove("input-error");

    // Validação do nome
    if (nome.value === "" || nome.value.length < 3) {
      nome.classList.add("input-error"); // Adicionar a classe de erro se a validação falhar
      mensagemErro.textContent +=
        "Por favor, digite um nome válido com pelo menos 3 caracteres.\n";
    }

    // Validação do telefone
    let regexTelefone = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    if (!regexTelefone.test(telefone.value)) {
      telefone.classList.add("input-error"); // Adicionar a classe de erro se a validação falhar
      mensagemErro.textContent +=
        "Por favor, digite um número de telefone válido. Formato: (99)99999-9999\n";
    }

    // Código para enviar os dados para o servidor, se a validação passar...
  });

// Adicionar event listeners aos campos de input para remover a classe de erro quando o usuário começar a digitar
document.getElementById("nome").addEventListener("input", function () {
  this.classList.remove("input-error");
});

document.getElementById("telefone").addEventListener("input", function () {
  this.classList.remove("input-error");
});
 

// SLIDES SECTION

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
}, 5000)

function nextImage() {
  count++;
if (count>4) {
  count = 1;
}
document.getElementById("radio"+count).checked = true;
}


//
