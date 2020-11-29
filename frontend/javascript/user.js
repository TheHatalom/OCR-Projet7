class User extends Request
{
    signup(signupBody)
    {
        return this.postpostConnect("user/signup", signupBody);
    }

    login(loginBody)
    {
        return this.postConnect("user/login", loginBody);
    }
}

