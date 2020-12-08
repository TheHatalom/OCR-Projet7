var discussionManager = new Discussion();

//Récupère toutes les discussions
discussionManager.getAll().then((result) =>
{
    //Affiche toutes les discussions
    for(let discussion of result)
    {
        var para = document.createElement("p");
        para.setAttribute("class", "row-6 title-discussion");
        para.innerHTML = 'Discussion : '+ discussion.title;

        var btnDetail = document.createElement("a");
        btnDetail.setAttribute("class", "btn btn-primary");
        btnDetail.setAttribute("href", "detailDiscussion.html?Id=" + discussion.id);
        btnDetail.innerHTML = 'Aller à la discussion';

        var div = document.createElement("div");
        div.setAttribute("class", "row justify-content-between all-discussion")
        div.appendChild(para);
        div.appendChild(btnDetail);

        document.getElementById("listDiscussion").appendChild(div);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
