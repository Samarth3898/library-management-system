const app = require("./app");
const { startDbServer } = require("./server");

startDbServer().then((_) => {
  app.listen(8080, (err) => {
    if (err) {
      console.error("Could not start server", err);
      return;
    }
    //* if server is listening on port 7000 then secret key is working
    console.log(`Listening on port 8080`);
  });
});
