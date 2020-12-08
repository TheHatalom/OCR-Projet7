var discussionManager = new Discussion();

//Récupère l'id de la discussion dans le sessionStorage
discussionId = sessionStorage.getItem("discussionId");

var title;
var message;
var userId = sessionStorage.getItem("userId");

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('updateDiscussionBtn').addEventListener("click", function()
    {
        //Récupère les valeurs de la discussion dans les champs
        title = document.getElementById('title').value;
        message = document.getElementById('message').value;

        //Création du body
        body = { "title":title, "message":message, "userId":userId };

        //Modification d'une discussion
        discussionManager.update(discussionId, body).then((result) =>
        {
            //redirection vers la page de détail de la discussion
            window.location.assign("./detailDiscussion.html?Id=" + discussionId);
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête PUT !");
        });
    });
})();