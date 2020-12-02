class Message extends Request
{
    create(body)
    {
        return super.post("message", body);
    }

    delete(id)
    {
        return super.delete("message/" + id);
    }
}
