class Message extends Request
{
    //Création d'un message
    create(body)
    {
        return super.post("message", body);
    }

    //Suppression d'un message
    delete(id)
    {
        return super.delete("message/" + id);
    }

    //Suppression de tous les messages
    deleteAll(discussionId)
    {
        return super.deleteAll("message/deleteAll/" + discussionId);
    }
}
