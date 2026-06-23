const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = header.split(' ')[1]; // Expect "Bearer <token>"
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded payload to request
    next(); // Continue to the route
  } catch (err) {
    return res.status(401).js ({ error: 'Invalid or expired token' });
  }
}

module.exports = { authenticate };
