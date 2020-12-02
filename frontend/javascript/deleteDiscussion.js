var discussionManager = new Discussion();

//get l'id de la discussion dans le sessionStorage
discussionId = sessionStorage.getItem("discussionId");

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('deleteDiscussionBtn').addEventListener("click", function()
    {
        discussionManager.delete(discussionId).then(() =>
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