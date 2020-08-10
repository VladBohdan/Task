(function () {
    emailjs.init("user_aooNirAlsHA1aJvzHqtFi");
})();

jQuery(document).ready(function () {
    jQuery('#sendValues').click(function () {
        if (window.sessionStorage) {
            sessionStorage.setItem("name", jQuery('#form-value-1').val());
            sessionStorage.setItem("email", jQuery('#form-value-2').val());
        }
    });
    let name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");

    jQuery('#form-value-3').val(name);
    jQuery('#form-value-4').val(email);


    function getParam(formClass) {
        return {
            name: jQuery(`.testUserName.${formClass}`).val(),
            notes: 'Hello',
            toName: jQuery(`.testEmail.${formClass}`).val(),
            toEmail: 'darekz04111995@gmail.com',
            phone: jQuery(`.testUserPhone.${formClass}`).val(),
            surname: jQuery(`.testUserSurname.${formClass}`).val()
        };
    }

    function sendEmail(config) {
        emailjs.send('gmail', 'template_bipWDsA2', config)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                window.location.href = 'thank%20.html';
            }, function (err) {
                console.log('FAILED...', err);
            });
    }
    jQuery("#sendEmail3, #sendEmail2, #sendEmail1").on("click", function (event) {
        let config = getParam(event.currentTarget.id);

        if (config.toEmail && config.name && config.phone && config.surname) {
            sendEmail(config);
        }
    });
});
