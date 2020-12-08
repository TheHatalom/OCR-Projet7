var messageManager = new Message();

//Récupère l'id de la discussion dans le sessionStorage
discussionId = sessionStorage.getItem("discussionId");


function deleteMessage(idElt)
{
    //Suppression d'un message
    messageManager.delete(idElt).then((result) =>
    {
        //redirection vers la page détail de la discussion
        window.location.assign("./detailDiscussion.html?Id=" + discussionId);
    })
    .catch(() =>
    {
        console.log("ERREUR dans la requête DELETE !");
    });
}