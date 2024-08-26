# Telaverge-Project
This a project given by Telaverge company for campus drive
This project outlines the creation of a system with two servers and a client, implementing a round-robin load balancing approach. The system incorporates logging and failover functionalities, guaranteeing even request distribution between servers and logging of both requests and responses.

##Components
Client:
Dispatches requests to the two servers in a round-robin fashion.
Logs interactions with both servers.
Server 1 and Server 2:
Each server processes incoming requests and logs them.
Servers respond with a predefined message while incorporating a delay to simulate processing time.

##Project Structure

/project-root
│
├── /client
│   ├── client.js              *Client code for sending requests*
│
├── /server1
│   ├── server1.js             *Server 1 code*
│   ├── Dockerfile             *Dockerfile for Server 1*
│   └── server1.log            *Log file for Server 1*
    ├── deployment-server1.yaml
├── /server2
│   ├── server2.js             *Server 2 code*
│   ├── Dockerfile             *Dockerfile for Server 2*
│   └── server2.log 
    ├── deployment-server2.yaml   *Log file for Server 2*
│
  *Kubernetes Deployment and Service configuration*
└── README.md                  *This README file*



