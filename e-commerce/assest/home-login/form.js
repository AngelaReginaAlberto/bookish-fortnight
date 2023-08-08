const form = document.getElementById("meuForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  
  if (nome === "" || !email.includes("@")) {
    alert("Por favor, insira um nome e endereço de e-mail válidos.");
  } else {
    // Enviar formulário
    form.submit();
  }
});
