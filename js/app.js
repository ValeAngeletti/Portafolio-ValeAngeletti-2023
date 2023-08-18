document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContacto__form");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const asuntoInput = document.getElementById("asunto");
    const mensajeInput = document.getElementById("mensajeID");
    const validacionTexto = /^[a-zA-Z\s]+$/; 
    const validacionEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ;
    const enviarBoton = document.querySelector(".formContacto__boton");
  
    const mostrarError = (input, message) => {
      const divInputs = input.parentElement;
      const errorMessage = divInputs.querySelector("#mensaje__error");
      errorMessage.textContent = message;
      divInputs.classList.add("error");
    };
  
    const ocultarError = input => {
      const divInputs = input.parentElement;
      const errorMessage = divInputs.querySelector("#mensaje__error");
      errorMessage.textContent = "";
      divInputs.classList.remove("error");
    };
  
    const validarInput = (input, regex, message) => {
      if (!regex.test(input.value)) {
        mostrarError(input, message);
      } else {
        ocultarError(input);
      }
    };

    const chequearValidaciones = () => {
        const nombreValido = validacionTexto.test(nombreInput.value);
        const emailValido = validacionEmail.test(emailInput.value);
        const asuntoValido = asuntoInput.value.trim() !== "";
        const mensajeValido = mensajeInput.value.trim() !== "";
    
        const formValido = nombreValido && emailValido && asuntoValido && mensajeValido;
        enviarBoton.disabled = !formValido;
      };
  
    nombreInput.addEventListener("blur", () => {
        validarInput(nombreInput, validacionTexto, "El campo nombre no puede estar vacío");
        chequearValidaciones();
    });
  
    emailInput.addEventListener("blur", () => {
        validarInput(emailInput,validacionEmail,"El campo email no puede estar vacío" );
        chequearValidaciones();
    });
  
    asuntoInput.addEventListener("blur", () => {
      if (asuntoInput.value.trim() === "") {
        mostrarError(asuntoInput, "El campo asunto no puede estar vacío");
      } else {
        ocultarError(asuntoInput);
      }
      chequearValidaciones();
    });
  
    mensajeInput.addEventListener("blur", () => {
      if (mensajeInput.value.trim() === "") {
        mostrarError(mensajeInput, "El campo mensaje no puede estar vacío");
      } else {
        ocultarError(mensajeInput);
      }
      chequearValidaciones();
    });
  
    chequearValidaciones();
});

 
 