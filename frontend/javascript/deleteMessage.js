var messageManager = new Message();

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('deleteMessageBtn').addEventListener("click", function()
    {
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
})();