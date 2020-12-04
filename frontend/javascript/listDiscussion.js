var discussionManager = new Discussion();

discussionManager.getAll().then((result) =>
{
    for(let discussion of result)
    {
        var para = document.createElement("p");
        para.setAttribute("class", "row-6 index-desc");
        para.innerHTML = 'Discussion : '+ discussion.title;

        var btnDetail = document.createElement("a");
        btnDetail.setAttribute("class", "btn btn-primary");
        btnDetail.setAttribute("href", "detailDiscussion.html?Id=" + discussion.id);
        btnDetail.innerHTML = 'Aller à la discussion';

        document.getElementById("listDiscussion").appendChild(para);
        document.getElementById("listDiscussion").appendChild(btnDetail);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
