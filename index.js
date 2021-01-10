// start your server here
const PORT = 5000;
const server = require("./api/server");

server.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
