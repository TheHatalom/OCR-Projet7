class User extends Request
{
    //Création d'un user
    signup(signupBody)
    {
        return super.postSignup("user/signup", signupBody);
    }

    //Connexion d'un user
    login(loginBody)
    {
        return super.postConnect("user/login", loginBody);
    }

    //Récupère tous les users
    getAll()
    {
        return super.get("user");
    }

    //Modification d'un user
    update(idUser, body)
    {
        return super.put("user/" + idUser, body);
    }

    //Suppression d'un user
    delete(id)
    {
        return super.delete("user/" + id);
    }
}

