const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 8085;

const server = http.createServer(app);

server.listen(PORT , console.log(`Server is running on port ${PORT}`));

// https://expenses-tracker-server.onrender.com/