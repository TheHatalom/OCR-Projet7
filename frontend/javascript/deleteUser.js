var userManager = new User();

function deleteUser(idElt)
{
    //Suppression d'un user
    userManager.delete(idElt).then((result) =>
    {
        //redirection vers la page détail de la discussion
        window.location.assign("./admin.html");
    })
    .catch(() =>
    {
        console.log("ERREUR dans la requête DELETE !");
    });
}