import jwt from 'jsonwebtoken'

const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {  //secret key stored in env file
        expiresIn: '30d'  // has expiry days
    })
}

export default generateToken