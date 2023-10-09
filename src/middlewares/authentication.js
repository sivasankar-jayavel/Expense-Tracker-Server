const expressAsyncHandler = require("express-async-handler");

const jwt = require('jsonwebtoken');
const User = require("../model/User");

const authMiddleware = expressAsyncHandler(async (req, res) => {
  let token ;
    if (req?.headers?.authorization?.startsWith("Bearer")) {    // ?. its Optional chaining for avoid && operation
      token = req?.headers?.authorization?.split(" ")[1];
    //    console.log(token);
     try {
        if (token){
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decoded)
            //find the user by id
            const user = await User.findById(decoded.id).select("-password");
            // console.log(user);
            //attach the user to the request object
            req.user = user;
            next();
      }
     } catch (error) {
        throw new Error("Not authorized token expired, login again");
     }
    } else {
        throw new Error("There is no token attached to the header");
    }
})


module.exports = authMiddleware;