var discussionManager = new Discussion();

discussionManager.getAll().then((result) =>
{
    console.log(result);
    for(let discussion of result)
    {
        var para = document.createElement("p");
        para.setAttribute("class", "row-6 index-desc");
        para.innerHTML = 'Discussion : '+ discussion.title;

        var link = document.createElement("a");
        link.setAttribute("class", "btn btn-primary");
        link.setAttribute("href", "detailDiscussion.html?Id=" + discussion.id);
        link.innerHTML = 'Aller à la discussion';

        document.getElementById("listDiscussion").appendChild(para);
        document.getElementById("listDiscussion").appendChild(link);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
