class Message extends Request
{
    create(body)
    {
        return this.post("message", body);
    }

    delete(id)
    {
        return this.delete("message/" + id);
    }
}
