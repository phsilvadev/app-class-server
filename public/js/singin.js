(() => {
  $('form').submit(function (e) {
    e.preventDefault();

    let email = $('#email');
    let password = $('#password');

    let button = $('#button-sub');

    password.prop('disabled', true);
    email.prop('disabled', true);

    button.prop('disabled', true).addClass('disabled');

    button.html(`Carregando <span
                    id='show-indicator-loading'
                    class='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>`);

    const data = {
      email: email.val(),
      password: password.val(),
    };

    $.ajax({
      type: 'POST',
      url: '/auth/api/signIn',
      contentType: 'application/json', // Corrigido para contentType
      data: JSON.stringify(data), // Envia os dados como uma string JSON
      success: function (response) {
        console.log('Sucesso:', response); // Manipule a resposta de sucesso

        localStorage.setItem('auth-session-nest', btoa(response));
      },
      error: function (xhr, status, error) {
        password.prop('disabled', true);
        email.prop('disabled', true);
        button.html('Entrar');

        $('.alert-danger').css({ display: 'block' });
      },
    });
  });
})();
