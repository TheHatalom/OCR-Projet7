var userManager = new User();

//Récupère le rôle dans sessionStorage
var role = sessionStorage.getItem("role");

//Récupère tous les users
userManager.getAll().then((result) =>
{
    //Affichage de l'admin uniquement aux administrateurs
    if(role == "adm")
    {
        //AFFICHAGE DES USERS
        for(let user of result)
        {
            //Informations des users
            var roleUser;
            user.idRole==1 ? roleUser="membre" : roleUser="admin";
            var para2 = document.createElement("p");
            para2.setAttribute("class", "row-6 index-desc");
            para2.innerHTML = '<br><br><br><span class="bold">Utilisateur  : </span>' + user.username + '<br><span class="bold"> Email : </span>' + user.email + '<br> <span class="bold">Rôle : </span>' + roleUser;

            //Bouton de changement du rôle
            var btnChangeRoleUser = document.createElement("a");
            btnChangeRoleUser.setAttribute("class", "btn btn-primary change-role-btn");
            btnChangeRoleUser.setAttribute("href", "./changeRoleUser.html?Email=" + user.email);
            btnChangeRoleUser.setAttribute("id", "changeRoleUserBtn" + user.id);
            btnChangeRoleUser.innerHTML = "Changer le rôle";

            //Bouton de suppression d'un user
            var btnDeleteUser = document.createElement("button");
            btnDeleteUser.setAttribute("class", "btn btn-danger");
            btnDeleteUser.setAttribute("id", "deleteUserBtn" + user.id);
            btnDeleteUser.innerHTML = "Supprimer l'utilisateur";

            document.getElementById("listUser").appendChild(para2);
            document.getElementById("listUser").appendChild(btnChangeRoleUser);
            document.getElementById("listUser").appendChild(btnDeleteUser);

            document.getElementById('deleteUserBtn' + user.id).addEventListener("click", function()
            {
                deleteUser(user.id);
            }); 
        }
    }
    else
    {
        //pas admin donc pas accès à la page
        var para2 = document.createElement("p");
        para2.setAttribute("class", "row-6 index-desc");
        para2.innerHTML = "Vous n'avez pas accès à cette page !";

        document.getElementById("listUser").appendChild(para2);
    }
    
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
