const http = require('http');

const data = JSON.stringify({
  firstName: 'Test',
  lastName: 'User',
  username: 'testuser5$',
  email: 'test5@example.com',
  password: 'Pass1234$',
  role: 'INVESTOR',
  country: 'US',
  phoneNumber: '1234567890'
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/auth/signup',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('Body:', body);
  });
});

req.on('error', (err) => console.error('Request error:', err));
req.write(data);
req.end();
