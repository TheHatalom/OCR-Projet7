var userManager = new User();

var email;
var password;
var loginBody;

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('loginBtn').addEventListener("click", function()
    {
        //Récupère les valeurs du user dans les champs
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;

        //Création du body
        loginBody = { "email":email, "password":password };

        //Reqête d'identification
        userManager.login(loginBody).then((result) =>
        {
            //Met le token dans SessionStorage
            sessionStorage.setItem("token", result.token);
            
            //Met le userId dans SessionStorage
            sessionStorage.setItem("userId", result.userId);

            //Met le role dans SessionStorage
            sessionStorage.setItem("role", result.role);

            //redirection vers la page de d'accueil
            window.location.assign("./accueil.html");
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête POST !");
        });
    });
})();
