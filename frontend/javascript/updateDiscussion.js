var discussionManager = new Discussion();

//Récupère les paramètres de l'URL
var url = new URL(window.location);
//Récupère l'id dans l'URL
var idElt = url.searchParams.get("Id");

var title;
var message;
//var userId = sessionStorage.getItem("userId");

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('updateDiscussionBtn').addEventListener("click", function()
    {
        title = document.getElementById('title').value;
        message = document.getElementById('message').value;

        body = { "title":title, "message":message/*, "userId":userId*/ };

        discussionManager.update(idElt, body).then((result) =>
        {
            //redirection vers la page de détail de la discussion
            window.location.assign("./detailDiscussion.html?Id=" + result.id);
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête PUT !");
        });
    });
})();