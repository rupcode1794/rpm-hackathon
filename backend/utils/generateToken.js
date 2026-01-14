import jwt from 'jsonwebtoken';

//Generate JWT Token
const generateToken =  (res,id) =>{
    const token =  jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    })
    //set cookie
    res.cookie('jwt', token , {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        maxAge: 30*24*60*60*1000
    })
}

export default generateToken