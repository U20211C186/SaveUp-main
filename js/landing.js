var redirectTimeout;
var buttonText = 'Registrarse';

function startTimeout() {
  redirectTimeout = setTimeout(() => {
    toggleButtonText();
    startTimeout();
  }, 3000);
}

function toggleButtonText() {
  buttonText = buttonText === 'Registrarse' ? 'Iniciar sesión' : 'Registrarse';
  updateButtonText(); // Llama a la función para actualizar el texto del botón
}

function init() {
  startTimeout();
}

function updateButtonText() {
  // Busca el botón por su ID y actualiza su texto
  var button = document.getElementById('botonRegistro');
  if (button) {
    button.innerText = buttonText;
  }
}
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
// Llama a la función init cuando se carga la página
window.onload = function () {
  init();
};
