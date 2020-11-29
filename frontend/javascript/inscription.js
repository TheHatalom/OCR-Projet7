var userManager = new User();

//Récupère les paramètres
var signupBody = 
{
    username:url.searchParams.get("username"),
    email:url.searchParams.get("email"),
    password:url.searchParams.get("password")
};

userManager.signup(signupBody).then((result) =>
{
    //redirection vers la page de connexion
    window.location.assign("./connexion.html");
})
.catch(() =>
{
    console.log("ERREUR dans la requête POST !");
});
