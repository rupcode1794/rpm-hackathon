import rateLimit from "express-rate-limit";




const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many authentication attempts, please try again later"
});

export {authLimiter} 