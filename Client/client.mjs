import axios from 'axios';

const servers = ['http://localhost:5001', 'http://localhost:5002'];
let currentServer = 0;

const makeRequest = async () => {
  try {
    const server = servers[currentServer];
    const response = await axios.get(server);
    console.log(`Response from ${server}: ${response.data}`);
  } catch (error) {
    console.error(`Error with ${servers[currentServer]}: ${error.message}`);
  }
  
  currentServer = (currentServer + 1) % servers.length;
  await new Promise(resolve => setTimeout(resolve, 1000));
};

setInterval(makeRequest, 1000);