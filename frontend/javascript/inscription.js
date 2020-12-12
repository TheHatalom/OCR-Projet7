var userManager = new User();

var username;
var email;
var password;
var signupBody;

// IIFE function -> appelée quand elle est créée
(function()
{

    document.getElementById('signupBtn').addEventListener("click", function(e)
    {
        //Récupère les valeurs du user dans les champs
        username = document.getElementById('username').value;
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;


        if(document.getElementById("form").checkValidity())
        {
            //Création du body
            signupBody = { "username":username, "email":email, "password":password };

            //Reqête de création d'un user
            userManager.signup(signupBody).then(() =>
            {
                //redirection vers la page de connexion
                window.location.assign("./connexion.html");
            })
            .catch(() =>
            {
                console.log("ERREUR dans la requête POST signup !");
            });
        }
        e.stopPropagation();
        return false;
    });
})();


