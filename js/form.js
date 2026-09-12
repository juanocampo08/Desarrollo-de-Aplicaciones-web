function inicializarFormulario() {
  const formulario = document.querySelector('#contact-form');
  if (!formulario) return;

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    limpiarErrores();

    let esValido = true;

    const nombre = document.querySelector('#nombre').value.trim();
    const email = document.querySelector('#email').value.trim();
    const categoria = document.querySelector('#categoria-encargo').value;
    const mensaje = document.querySelector('#mensaje').value.trim();

    if (nombre === '') {
      mostrarError('#error-nombre', 'El nombre es obligatorio.');
      esValido = false;
    } else if (nombre.length < 3) {
      mostrarError('#error-nombre', 'El nombre debe tener al menos 3 caracteres.');
      esValido = false;
    }

    const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      mostrarError('#error-email', 'El correo electrónico es obligatorio.');
      esValido = false;
    } else if (!expresionEmail.test(email)) {
      mostrarError('#error-email', 'Ingresa un correo electrónico válido.');
      esValido = false;
    }

    if (categoria === '') {
      mostrarError('#error-categoria', 'Por favor selecciona una categoría de interés.');
      esValido = false;
    }

    if (mensaje === '') {
      mostrarError('#error-mensaje', 'El mensaje o detalle del encargo es obligatorio.');
      esValido = false;
    } else if (mensaje.length < 10) {
      mostrarError('#error-mensaje', 'Cuéntanos un poco más (mínimo 10 caracteres).');
      esValido = false;
    }

    if (esValido) {
      const numeroWhatsapp = "15169137456";
      const texto = `Hola, soy ${nombre}.%0aCorreo: ${email}%0aCategoría: ${categoria}%0aMensaje: ${mensaje}`;
      const url = `https://wa.me/${numeroWhatsapp}?text=${texto}`;

      window.open(url, '_blank');

      const mensajeExito = document.querySelector('#form-success');
      mensajeExito.textContent = '¡Gracias! Te estamos redirigiendo a WhatsApp.';
      formulario.reset();
    }
  });
}

function mostrarError(selector, mensaje) {
  const elemento = document.querySelector(selector);
  if (elemento) elemento.textContent = mensaje;
}

function limpiarErrores() {
  const errores = document.querySelectorAll('.error-message');
  errores.forEach(function (error) {
    error.textContent = '';
  });

  const exito = document.querySelector('#form-success');
  if (exito) exito.textContent = '';
}