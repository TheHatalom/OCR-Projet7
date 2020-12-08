var messageManager = new Message();

function delAllMessage(discussionId)
{
    //Supprime tous les messages de la discussion
    messageManager.deleteAll(discussionId).then(() =>
    {
        //Suppression de la discussion
        discussionManager.delete(discussionId).then(() =>
        {
            //redirection vers la page des discussion
            window.location.assign("./listDiscussion.html");
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête DELETE !");
        });
    })
    .catch(() =>
    {
        console.log("ERREUR dans la requête DELETE !");
    });

    return 0;
}