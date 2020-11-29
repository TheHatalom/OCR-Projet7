var userManager = new User();

//Récupère les paramètres
var email;
var password;
var loginBody;
window.onload=function()
{
    document.getElementById('connectBtn').addEventListener("click", function()
    {
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;

        loginBody = { email:email, password:password };
    });
}

userManager.login(loginBody).then((result) =>
{
    //Met le token dans SessionStorage
    sessionStorage.setItem("token", result.token);

    //redirection vers la page de d'accueil
    window.location.assign("./accueil.html");
})
.catch(() =>
{
    console.log("ERREUR dans la requête POST !");
});
