class User extends Request
{
    signup(signupBody)
    {
        return super.postSignup("user/signup", signupBody);
    }

    login(loginBody)
    {
        return super.postConnect("user/login", loginBody);
    }

    getName(userId)
    {
        return super.get("user/getName/" + userId);
    }
}

