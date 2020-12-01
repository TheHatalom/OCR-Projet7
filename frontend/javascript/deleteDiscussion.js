var discussionManager = new Discussion();

//Récupère les paramètres de l'URL
var url = new URL(window.location);
//Récupère l'id dans l'URL
var idElt = url.searchParams.get("Id");

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('deleteDiscussionBtn').addEventListener("click", function()
    {
        discussionManager.delete(idElt).then((result) =>
        {
            //redirection vers la page des discussion
            window.location.assign("./listDiscussion.html");
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête DELETE !");
        });
    });
})();