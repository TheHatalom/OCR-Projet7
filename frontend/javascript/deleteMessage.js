var messageManager = new Message();

// IIFE function -> appelée quand elle est créée
/*(function()
{
    document.getElementsByClassName('deleteMessage').addEventListener("click", function()
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
}