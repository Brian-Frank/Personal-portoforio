const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', async (req, res) => {
    const recaptchaResponse = req.body['g-recaptcha-response'];
    const secretKey = 'YOUR_SECRET_KEY';

    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

    const response = await fetch(verificationURL, { method: 'POST' });
    const data = await response.json();

    if (data.success) {
        // Procesa el formulario
        res.send('Formulario enviado correctamente.');
    } else {
        res.send('Error en la verificación de reCAPTCHA.');
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
