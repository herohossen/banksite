//Login button
document.getElementById('login-submit').addEventListener('click', function ()
{
    //User Email
    const emailField= document.getElementById('user-email');
    const userEmail = emailField.value;
    //Password
    const passwordField= document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'delowar@mail.com' && userPassword == 123 )
    {
      
        window.location.href='banking.html';
    }
    else
    {
        console.log(alert('Invalid user name or password'))
    }

});
