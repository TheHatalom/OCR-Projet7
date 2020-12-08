class Discussion extends Request
{
    //Récupère toutes les discussions
    getAll()
    {
        return super.get("discussion");
    }

    //Récupère une discussion à partir de son id
    getOne(id)
    {
        return super.get("discussion/" + id);
    }

    //Récupère les 5 dernières discussions
    getAllLimit()
    {
        return super.get("lastDiscussion");
    }

    //Création d'une discussion
    create(body)
    {
        return super.post("discussion", body);
    }

    //Modification d'une discussion
    update(id, body)
    {
        return super.put("discussion/" + id, body);
    }

    //Suppression d'une discussion
    delete(id)
    {
        return super.delete("discussion/" + id);
    }
}
