var messageManager = new Message();

//Récupère l'id de la disscussion dans le sessionStorage
var discussionId = sessionStorage.getItem("discussionId");

var message;
var userId = sessionStorage.getItem("userId");

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('createMessageBtn').addEventListener("click", function()
    {
        //Récupère les valeurs de la discussion dans les champs
        message = document.getElementById('message').value;

        //Création du body
        body = { "message":message, "discussionId":discussionId, "userId":userId };

        //Création d'un message
        messageManager.create(body).then((result) =>
        {
            //redirection vers la page de détail de la discussion
            window.location.assign("./detailDiscussion.html?Id=" + discussionId);
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête POST !");
        });
    });
})();
