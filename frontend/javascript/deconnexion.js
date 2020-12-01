// IIFE function -> appelée quand elle est créée
(function()
{
    document.getElementById('deconnexionBtn').addEventListener("click", function()
    {
        sessionStorage.clear();
    });
})();