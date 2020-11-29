var discussionManager = new Discussion();

//Récupère les paramètres de l'URL
const url = new URL(window.location);
//Récupère l'id dans l'URL
var idElt = url.searchParams.get("Id");

discussionManager.getOne(idElt).then((result) =>
{
    console.log(result);

    var para = document.createElement("p");
    para.setAttribute("class", "row-6 index-desc");
    para.innerHTML = 'Titre : '+ result.title + '<br><br>Message : '+ result.message;

    document.getElementById("detailDiscussion").appendChild(para);
})
.catch(() =>
{
    console.log("ERREUR dans la requête GET !");
});
