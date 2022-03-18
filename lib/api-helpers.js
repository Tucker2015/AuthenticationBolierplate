export function extractUser(req) {
  if (!req.user) return null;
  // take only needed user fields to avoid sensitive ones (such as password)
  const {
    _id, name, email, bio, profilePicture, passKey, keyInUse
  } = req.user;
  return {
    _id, name, email, bio, profilePicture, passKey, keyInUse
  };
}