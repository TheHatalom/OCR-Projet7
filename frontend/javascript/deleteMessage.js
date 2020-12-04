var messageManager = new Message();

//get l'id de la discussion dans le sessionStorage
discussionId = sessionStorage.getItem("discussionId");

// IIFE function -> appelée quand elle est créée
/*(function()
{
    document.getElementsById('deleteMessageBtn').addEventListener("click", function()
    {
        idElt = this.dataset.id;
        messageManager.delete(idElt).then((result) =>
        {
            //redirection vers la page détail de la discussion
            window.location.assign("./detailDiscussion.html?Id=" + idElt);
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête DELETE !");
        });
    });
})();*/


function deleteMessage(idElt)
{
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





/*
(function()
{
    var items = document.getElementsByClassName('deleteMessage');
    for (var i = 0; i < items.length; i++) 
    {
        items[i].addEventListener('click', deleteMessage);
    }
})();


function deleteMessage(elt)
{
    idElt = elt.dataset.id;
    console.log(idElt);
    messageManager.delete(idElt).then(() =>
    {
        //redirection vers la page détail de la discussion
        window.location.assign("./detailDiscussion.html?Id=" + idElt);
    })
    .catch(() =>
    {
        console.log("ERREUR dans la requête DELETE !");
    });
}*/