const AccountController = require("./controller/medium.js");

require("express-group-routes");

const express = require("express");

const bodyPanser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyPanser.json());

app.listen(port, () => console.log(`Listen to port ${port}`));

app.group("/api/v1", router => {
  //Create new API todos
  router.get("/accounts", AccountController.index);
  //GET detail route
  router.get("/account/:id", AccountController.show);
  //POST new account
  router.post("/account", AccountController.create);
  //PATCH(update) an account
  router.patch("/account/:id", AccountController.update);
  //DELETE an account
  router.delete("/account/:id", AccountController.delete);
});
