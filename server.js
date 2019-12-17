const Controller = require("./controller/medium.js");

require("express-group-routes");

const express = require("express");

const bodyPanser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyPanser.json());

app.listen(port, () => console.log(`Listen to port ${port}`));

app.group("/api/v1", router => {
  //GET all Category
  router.get("/categories", Controller.index);
  //POST Category
  router.post("/category", Controller.createcategory);
  //GET All Article
  router.get("/articles", Controller.allarticle);
  // router.create("/account", AccountController.create);
  // //PATCH(update) an account
  // router.patch("/account/:id", AccountController.update);
  // //DELETE an account
  // router.delete("/account/:id", AccountController.delete);
});
