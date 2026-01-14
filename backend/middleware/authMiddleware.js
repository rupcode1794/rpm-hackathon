import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = { id: decoded.id };
      next();
    } catch (err) {
      const error = new Error("Not authorised, Invalid token");
      error.status = 401;
      return next(error);
    }
  } else {
    const error = new Error("Not authorised, no token");
    error.status = 401;
    return next(error);
  }
}; 

export { protect };
