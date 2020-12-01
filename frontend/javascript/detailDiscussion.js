var discussionManager = new Discussion();
//var userManager = new User();

//Récupère les paramètres de l'URL
var url = new URL(window.location);
//Récupère l'id dans l'URL
var idElt = url.searchParams.get("Id");
//Place l'id de la discussion dans le sessionStorage
sessionStorage.setItem("discussionId", idElt);

discussionManager.getOne(idElt).then((result) =>
{
    var para = document.createElement("p");
    para.setAttribute("class", "row-6 index-desc");
    para.innerHTML = 'Titre : '+ result.title + '<br><br>Message : '+ result.message;

    var userId = sessionStorage.getItem("userId");
    /*if(userId == result.userId)
    {*/
        var btnUpdate = document.createElement("a");
        btnUpdate.setAttribute("class", "btn btn-primary");
        btnUpdate.setAttribute("href", "./updateDiscussion.html?Id=" + idElt);
        btnUpdate.innerHTML = 'Modifier la discussion';
    /*}*/

    document.getElementById("detailDiscussion").appendChild(para);
    document.getElementById("detailDiscussion").appendChild(btnUpdate);
    document.getElementById("detailDiscussion").appendChild(btnDelete);

    for(let discussion of result.Messages)
    {
        var username;/*
        userManager.getName(discussion.userId).then((result) =>
        {
            username = result.username;
        })
        .catch(() =>
        {
            console.log("ERREUR dans la requête GET !");
        });*/

        var para2 = document.createElement("p");
        para2.setAttribute("class", "row-6 index-desc");
        para2.innerHTML = 'Message de  : ' + username + '<br>' + discussion.message;

        var userId = sessionStorage.getItem("userId");
        /*if(userId == result.userId)
        {*/
            var btnDeleteMessage = document.createElement("button");
            btnDeleteMessage.setAttribute("class", "btn btn-primary");
            btnDeleteMessage.setAttribute("id", "deleteMessageBtn");
            btnDeleteMessage.innerHTML = 'Supprimer le message';
        /*}*/

        document.getElementById("detailDiscussion").appendChild(para2);
        document.getElementById("detailDiscussion").appendChild(btnDeleteMessage);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
