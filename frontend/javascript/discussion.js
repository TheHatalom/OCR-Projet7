class Discussion extends Request
{
    getAll()
    {
        return super.get("discussion");
    }

    getOne(id)
    {
        return super.get("discussion/" + id);
    }

    getAllLimit()
    {
        return super.get("lastDiscussion");
    }

    create(body)
    {
        return super.post("discussion", body);
    }

    update(id, body)
    {
        return super.put("discussion/" + id, body);
    }

    delete(id)
    {
        return super.delete("discussion/" + id);
    }
}
