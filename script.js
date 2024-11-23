
(function () {
    emailjs.init('c_NpVJL7oxTxHyc1d');
})();


document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_5m5nnen'; // Reemplaza con tu serviceID de Gmail
    const templateID = 'template_lg8xof8'; // Reemplaza con tu templateID

    /* const recaptchaResponse = grecaptcha.getResponse();
    if (recaptchaResponse.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa el reCAPTCHA.'
        });
        return;
    }*/

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: 'Tu mensaje ha sido enviado correctamente.',
                showConfirmButton: false,
                timer: 2000
            });
        }, (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje: ' + JSON.stringify(err)
            });
        });
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});

