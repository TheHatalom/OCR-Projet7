class Request 
{
    //Constructeur
    constructor()
    {
        this.api="http://localhost:3000/api/";
    }


    //Création d'un user
    postSignup(action, body) 
    {
        var request = new XMLHttpRequest();

        const traitement = new Promise((resolve, reject) => 
        {
            request.onreadystatechange = function () 
            {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 201) 
                {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState == XMLHttpRequest.DONE && this.status != 201) 
                {
                    reject();
                }
            };
        });


        //Requête API
        request.open("POST", this.api + action);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(body));

        return traitement;
    }


    //Connexion d'un user
    postConnect(action, body) 
    {
        var request = new XMLHttpRequest();

        const traitement = new Promise((resolve, reject) => 
        {
            request.onreadystatechange = function () 
            {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
                {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) 
                {
                    reject();
                }
            };
        });


        //Requête API
        request.open("POST", this.api + action);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(body));

        return traitement;
    }


    //Requête de récupération
    get(action) 
    {
        var request = new XMLHttpRequest();

        const traitement = new Promise((resolve, reject) => 
        {
            request.onreadystatechange = function () 
            {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
                {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) 
                {
                    reject();
                }
            };
        });

        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {
            //Requête API
            request.open("GET", this.api + action);
            request.setRequestHeader("Authorization", "Bearer " + token);
            request.send();

            return traitement;
        }
        else
        {
            window.location.assign("./connexion.html");
        }
    }


    //Requête de création
    post(action, body) 
    {
        var request = new XMLHttpRequest();

        const traitement = new Promise((resolve, reject) => 
        {
            request.onreadystatechange = function () 
            {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 201) 
                {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState == XMLHttpRequest.DONE && this.status != 201) 
                {
                    reject();
                }
            };
        });

        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {
            //Requête API
            request.open("POST", this.api + action);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("Authorization", "Bearer " + token);
            request.send(JSON.stringify(body));

            return traitement;
        }
        else
        {
            window.location.assign("./connexion.html");
        }
    }


    //Requête de modification
    put(action, body) 
    {
        var request = new XMLHttpRequest();

        const traitement = new Promise((resolve, reject) => 
        {
            request.onreadystatechange = function () 
            {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
                {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) 
                {
                    reject();
                }
            };
        });

        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {
            //Requête API
            request.open("PUT", this.api + action);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("Authorization", "Bearer " + token);
            request.send(JSON.stringify(body));

            return traitement;
        }
        else
        {
            window.location.assign("./connexion.html");
        }
    }


    //Requête de suppression
    delete(action) 
    {
        var request = new XMLHttpRequest();

        const traitement = new Promise((resolve, reject) => 
        {
            request.onreadystatechange = function () 
            {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
                {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) 
                {
                    reject();
                }
            };
        });


        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {
            //Requête API
            request.open("DELETE", this.api + action);
            request.setRequestHeader("Authorization", "Bearer " + token);
            request.send();

            return traitement;
        }
        else
        {
            window.location.assign("./connexion.html");
        }
    }


    //Requête de suppression de plusieurs objets
    deleteAll(action) 
    {
        var request = new XMLHttpRequest();

        const traitement = new Promise((resolve, reject) => 
        {
            request.onreadystatechange = function () 
            {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
                {
                    resolve(JSON.parse(this.responseText));
                } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) 
                {
                    reject();
                }
            };
        });


        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {
            //Requête API
            request.open("DELETE", this.api + action);
            request.setRequestHeader("Authorization", "Bearer " + token);
            request.send();

            return traitement;
        }
        else
        {
            window.location.assign("./connexion.html");
        }
    }
}