var discussionManager = new Discussion();
//var userManager = new User();

//Récupère les paramètres de l'URL
const url = new URL(window.location);
//Récupère l'id dans l'URL
var idElt = url.searchParams.get("Id");

discussionManager.getOne(idElt).then((result) =>
{
    var para = document.createElement("p");
    para.setAttribute("class", "row-6 index-desc");
    para.innerHTML = 'Titre : '+ result.title + '<br><br>Message : '+ result.message;

    document.getElementById("detailDiscussion").appendChild(para);

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

        document.getElementById("detailDiscussion").appendChild(para2);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
