var discussionManager = new Discussion();

//Récupère les paramètres de l'URL
const url = new URL(window.location);

//Récupère l'id dans l'URL
var idElt = url.searchParams.get("Id");

//Place l'id de la discussion dans le sessionStorage
sessionStorage.setItem("discussionId", idElt);

discussionManager.getOne(idElt).then((result) =>
{
    console.log(result.Messages);
    var para = document.createElement("p");
    para.setAttribute("class", "row-6 index-desc");
    para.innerHTML = 'Titre : '+ result.title + '<br><br>Message : '+ result.message;

    if(sessionStorage.getItem("userId") != null)
    {
        //Get l'id du user dans le sessionStorage
        var userId = sessionStorage.getItem("userId");
        if(userId == result.userId)
        {
            var btnUpdate = document.getElementById("updateDiscussionBtn");
            btnUpdate.setAttribute("class", "btn btn-primary");
            btnUpdate.setAttribute("href", "./updateDiscussion.html?Id=" + idElt);
            btnUpdate.innerHTML = 'Modifier la discussion';

        }
    }
    
    document.getElementById("detailDiscussion").appendChild(para);

    //AFFICHAGE DES MESSAGES
    for(let message of result.Messages)
    {
        var username = message.User.username;

        var para2 = document.createElement("p");
        para2.setAttribute("class", "row-6 index-desc");
        para2.innerHTML = 'Message de  : ' + username + '<br>' + message.message;

        var userId = sessionStorage.getItem("userId");
        if(userId == message.User.id) //peut etre à changer comme discussion
        {
            var btnDeleteMessage = document.createElement("button");
            btnDeleteMessage.setAttribute("class", "btn btn-primary");
            btnDeleteMessage.setAttribute("id", "deleteMessageBtn");
            btnDeleteMessage.innerHTML = 'Supprimer le message';
        }

        document.getElementById("detailDiscussion").appendChild(para2);
        document.getElementById("detailDiscussion").appendChild(btnDeleteMessage);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
