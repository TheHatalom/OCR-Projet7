class User extends Request
{
    signup(signupBody)
    {
        return this.postConnect("user/signup", signupBody);
    }

    login(loginBody)
    {
        return this.postConnect("user/login", loginBody);
    }

    getName(userId)
    {
        return this.get("user/getName/" + userId);
    }
}

