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

    create(body)
    {
        return this.post("discussion", body);
    }

    update(id, body)
    {
        return this.put("discussion/" + id, body);
    }

    delete(id)
    {
        return this.delete("discussion/" + id);
    }
}
