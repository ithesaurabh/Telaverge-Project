import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 5002;

// Log request and response to server1.log
app.use((req, res, next) => {
  const logEntry = `Request: ${req.method} ${req.url} at ${new Date().toISOString()}\n`;
  fs.appendFile('server2.log', logEntry, (err) => {
    if (err) console.error('Error logging request:', err);
  });
  next();
});

app.get('/', (req, res) => {
  const responseMessage = 'Response from Server 2';
  setTimeout(() => {
    res.send(responseMessage);
    fs.appendFile('server2.log', `Response: ${responseMessage} at ${new Date().toISOString()}\n`, (err) => {
      if (err) console.error('Error logging response:', err);
    });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server 2 listening on port ${PORT}`);
});
