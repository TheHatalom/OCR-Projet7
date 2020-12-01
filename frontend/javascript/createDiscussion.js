var discussionManager = new Discussion();

var title;
var message;
//var userId = sessionStorage.getItem("userId");

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('createDiscussionBtn').addEventListener("click", function()
    {
        title = document.getElementById('title').value;
        message = document.getElementById('message').value;

        body = { "title":title, "message":message, "userId":1/*userId*/ };

        discussionManager.create(body).then((result) =>
        {
            //redirection vers la page de détail de la discussion
            window.location.assign("./detailDiscussion.html?Id=" + result.id);
        })
        .catch((error) =>
        {
            console.log("ERREUR dans la requête POST !" + error);
        });
    });
})();
