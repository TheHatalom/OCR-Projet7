class Discussion extends Request
{
    getAll()
    {
        return this.get("discussion");
    }

    getOne(id)
    {
        return this.get("discussion/" + id);
    }

    getAllLimit()
    {
        return this.get("lastDiscussion");
    }
}

