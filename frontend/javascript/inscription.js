var userManager = new User();

var username;
var email;
var password;
var signupBody;

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('signupBtn').addEventListener("click", function()
    {
        username = document.getElementById('username').value;
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;

        signupBody = { "username":username, "email":email, "password":password };

        userManager.signup(signupBody).then(() =>
        {
            //redirection vers la page de connexion
            window.location.assign("./connexion.html");
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête POST signup !");
        });
    });
})();


