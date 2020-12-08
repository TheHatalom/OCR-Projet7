var userManager = new User();


//Récupère l'idUser dans sessionStorage
var idUser = sessionStorage.getItem("idUser");

// IIFE function -> appelée quand elle est créée
(function()
{
    //Au click, on récupère le nouveau rôle
    document.getElementById('changeRoleValidate').addEventListener("click", function()
    {
        //Récupère les valeurs du user dans le sessionStorage
        var idUserUpdate = sessionStorage.getItem("idUserUpdate");
        
        var idRole;
        role = document.getElementById('selectRole').value;
        switch(role)
        {
            case 'membre':
                idRole = 1;
                break;

            case 'admin':
                idRole = 2;
                break;

            default:
                break; 
        }

        changeRoleBody = { "idRole":idRole };

        //Modifie le rôle du user
        userManager.update(idUserUpdate, changeRoleBody).then(() =>
        {
            //redirection vers la page d'admin
            window.location.assign("./admin.html");
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête GET !");
        });
    });
})();
