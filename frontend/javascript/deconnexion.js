// IIFE function -> appelée quand elle est créée
(function()
{
    //Au click, on vide le sessionStorage et on redirige vers la page de connexion
    document.getElementById('deconnexionBtn').addEventListener("click", function()
    {
        sessionStorage.clear();
    });
})();