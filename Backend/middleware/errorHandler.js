function errorHandler(err, req, res, next) {
  console.error(' Error:', err.message);
  res.status(500).json({ error: 'Something went wrong, please try again later.' });
}

module.exports = { errorHandler };
