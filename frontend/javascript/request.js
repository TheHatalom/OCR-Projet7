class Request 
{
    constructor()
    {
        this.api="http://localhost:3000/api/";
    }

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
            //request.setRequestHeader("Authorization", "Bearer " + token);
            request.send();

            return traitement;
        }
        else
        {
            window.location.assign("./connexion.html");
        }
    }

    post(action, body) 
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
/*
        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {*/
            //Requête API
            request.open("POST", this.api + action);
            request.setRequestHeader("Content-Type", "application/json");
            //request.setRequestHeader("Authorization", "Bearer " + token);
            request.send(JSON.stringify(body));

            return traitement;/*
        }
        else
        {
            window.location.assign("./connexion.html");
        }*/
    }

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

/*
        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {*/
            //Requête API
            request.open("POST", this.api + action);
            request.setRequestHeader("Content-Type", "application/json");
            //request.setRequestHeader("Authorization", "Bearer " + token);
            request.send(JSON.stringify(body));

            return traitement;/*
        }
        else
        {
            window.location.assign("./connexion.html");
        }*/
    }

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

/*
        //Get token
        var token = sessionStorage.getItem("token");
        if(token != null)
        {*/
            //Requête API
            request.open("POST", this.api + action);
            request.setRequestHeader("Content-Type", "application/json");
            //request.setRequestHeader("Authorization", "Bearer " + token);
            request.send(JSON.stringify(body));

            return traitement;/*
        }
        else
        {
            window.location.assign("./connexion.html");
        }*/
    }
}