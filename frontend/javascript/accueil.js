var discussionManager = new Discussion();

//Récupère les dernières discussions
discussionManager.getAllLimit().then((result) =>
{
    for(let discussion of result)
    {
        var para = document.createElement("p");
        para.setAttribute("class", "text-center last-discussion");
        para.innerHTML = 'Discussion : '+ discussion.title;

        document.getElementById("lastDiscussion").appendChild(para);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
