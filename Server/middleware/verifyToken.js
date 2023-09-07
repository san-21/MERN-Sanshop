import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ message: "Unauthorized : You are not authenticated" });
  }
  const token = authHeader.split(" ")[1];

  // if token foound then verify the token is valid or not

  jwt.verify(
    token,
    process.env.ACCCESS_TOKEN_SECRET_KEY,
    (err, decodedUserData) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden" });
      }
      // then set and pass user data to next function/routes or Middleware
      req.user = decodedUserData.UserInfo.username;
      req.status = decodedUserData.UserInfo.status;
      req.role = decodedUserData.UserInfo.role;
      next();
    }
  );
};
