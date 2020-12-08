var userManager = new User();

//Récupère les paramètres de l'URL
const url = new URL(window.location);

//Récupère l'email dans l'URL
var email = url.searchParams.get("Email");

//Récupère le rôle dans sessionStorage
var role = sessionStorage.getItem("role");

//Récupère tous les users
userManager.getAll().then((result) =>
{
    //AFFICHAGE DES USERS
    for(let user of result)
    {
        //Affiche uniquement le user à modifier
        if(email == user.email)
        {
            sessionStorage.setItem("idUserUpdate", user.id);
            sessionStorage.setItem("idRole", user.idRole);
            
            var roleUser;
            user.idRole==1 ? roleUser="membre" : roleUser="admin";
            var para2 = document.createElement("p");
            para2.setAttribute("class", "row-6 index-desc");
            para2.innerHTML = '<br><br><br>Utilisateur  : ' + user.username + '<br> Email : ' + user.email + '<br> Rôle : ' + roleUser;

            document.getElementById("listUser").appendChild(para2);

            document.getElementById("selectRole").options[0].text = roleUser;
            document.getElementById("changeRoleValidate").innerHTML="Changer le rôle";
        }
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});



