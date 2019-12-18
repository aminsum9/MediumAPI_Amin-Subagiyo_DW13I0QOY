const Categories = require("./controller/Categories.js");
const Articles = require("./controller/Articles.js");

require("express-group-routes");

const express = require("express");

const bodyPanser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyPanser.json());

app.listen(port, () => console.log(`Listen to port ${port}`));

app.group("/api/v1", router => {
  //GET all Category
  router.get("/categories", Categories.showcategory);
  //POST Category
  router.post("/category", Categories.createcategory);
  //GET All Article
  router.get("/articles", Articles.allarticle);
  // router.create("/account", AccountController.create);
  // //PATCH(update) an account
  // router.patch("/account/:id", AccountController.update);
  // //DELETE an account
  // router.delete("/account/:id", AccountController.delete);
});
