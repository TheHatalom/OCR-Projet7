var discussionManager = new Discussion();

//get l'id de la discussion dans le sessionStorage
discussionId = sessionStorage.getItem("discussionId");

// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('deleteDiscussionBtn').addEventListener("click", function()
    {
        //Appel fonction suppression messages de la discussion
        delAllMessage(discussionId);
    });
})();