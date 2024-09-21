import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Auth failed" });
  }

  const decryptedInfo = jwt.verify(token, process.env.JWT_SECRET);

  if (!decryptedInfo) {
    return res.status(401).json({ message: "Auth failed" });
  }
  req.body.userId = decryptedInfo.userId;
  return next();
};
export default auth;
