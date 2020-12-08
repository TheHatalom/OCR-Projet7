var discussionManager = new Discussion();

//Récupère les paramètres de l'URL
const url = new URL(window.location);

//Récupère l'id dans l'URL
var idElt = url.searchParams.get("Id");

//Place l'id de la discussion dans le sessionStorage
sessionStorage.setItem("discussionId", idElt);

//Récupère une discussion
discussionManager.getOne(idElt).then((result) =>
{
    var para = document.createElement("p");
    para.setAttribute("class", "row-6 detail-title");
    para.innerHTML = 'Titre : '+ result.title + '<br><br>Message : '+ result.message;

    //Vérification de l'existance du userId
    if(sessionStorage.getItem("userId") != null)
    {
        //Get l'id du user dans le sessionStorage
        var userId = sessionStorage.getItem("userId");
        document.getElementById("updateDiscussionBtn").disabled = true;
        document.getElementById("deleteDiscussionBtn").disabled = true;

        //Si userId correspond a celui qui a créé, alors on autorise la modification et la suppression
        if(userId == result.userId)
        {
            document.getElementById("updateDiscussionBtn").disabled = false;
            document.getElementById("deleteDiscussionBtn").disabled = false;
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
        para2.setAttribute("class", "row-6 text-left message");
        para2.innerHTML = '<span class="bold">Message de  : ' + username + '</span><br>' + message.message;

        var div2 = document.createElement("div");
        div2.setAttribute("class", "row justify-content-between all-message")
        div2.appendChild(para2);

        var div = document.createElement("div");
        div.setAttribute("class", "row d-flex justify-content-between message-detail-discussion")
        div.appendChild(div2);

        document.getElementById("detailDiscussionMessage").appendChild(div);

        var userId = sessionStorage.getItem("userId");
        //Si userId correspond a celui qui a créé, alors on autorise la suppression
        if(userId == message.User.id)
        {
            var btnDeleteMessage = document.createElement("button");
            btnDeleteMessage.setAttribute("class", "btn btn-light");
            btnDeleteMessage.setAttribute("id", "deleteMessageBtn" + message.id);
            
            var iconDelete = document.createElement("img");
            iconDelete.setAttribute("src", "../assets/images/poubelle.svg");

            btnDeleteMessage.appendChild(iconDelete);

            div.appendChild(btnDeleteMessage);

            document.getElementById('deleteMessageBtn' + message.id).addEventListener("click", function()
            {
                deleteMessage(message.id);
            }); 
        }
        document.getElementById("detailDiscussionMessage").appendChild(div);
    }
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
