import jwt from 'jsonwebtoken'
import User from '../Models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async(req, res, next) => {
    let token;

    //checking the header token passed while running api
    if(req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer'))
    {
        try {
            token = req.headers.authorization.split(" ")[1];
            console.log(token);
            //taoken id decoding
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            //not authorized
            throw new Error("Not authorized, token failed");
        }
    }
    if(!token){
        res.status(401);
        //no token passed
        throw new Error("Not authorized, no token");
    }
});

export {protect};