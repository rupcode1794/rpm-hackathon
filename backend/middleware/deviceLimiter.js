import rateLimit from "express-rate-limit";

export const deviceLimiter = rateLimit({
  windowMs: 615 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
