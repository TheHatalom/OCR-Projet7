const jwt = require('jsonwebtoken');

//Middleware d'authentification
module.exports = (req, res, next) => 
{
    try 
    {
        const token = req.headers.authorization.split(' ')[1];
        try
        {
            jwt.verify(token, 'GROUPOMANIATOKEN');
            next();
        }
        catch
        {
            throw new Error('Invalid user ID');
        }
    } 
    catch 
    {
        res.status(401).json(
        {
            error: new Error('Invalid request!')
        });
    }
};