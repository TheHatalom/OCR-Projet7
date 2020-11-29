var discussionManager = new Discussion();

discussionManager.getAllLimit().then((result) =>
{
    for(let discussion of result)
    {
        var para = document.createElement("p");
        para.setAttribute("class", "col-6 index-desc");
        para.innerHTML = 'Discussion : '+ discussion.title;

        document.getElementById("lastDiscussion").appendChild(para);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
