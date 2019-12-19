const Categories = require("./controller/Categories");
const Articles = require("./controller/Articles");
const Users = require("./controller/User");
const Auth = require("./controller/Auth");

const { authenticated } = require("./middleware");

require("express-group-routes");

const express = require("express");

const bodyPanser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyPanser.json());

app.listen(port, () => console.log(`Listen to port ${port}`));

app.group("/api/v1", router => {
  /* Task 1 */
  //GET all Category
  router.get("/categories", Categories.showcategory);
  //POST Category
  router.post("/category", Categories.createcategory);

  /* Task 2 */
  //GET All Article
  router.get("/articles", Articles.allarticle);
  // GET spesifik Article
  router.get("/article/:id", Articles.specificArticle);
  //ADD article
  router.post("/article", Articles.addArticle);
  //GET popular article
  router.get("/articles/latest", Articles.getPopular);

  /* Task 3 */
  //GET Article by Category
  router.get("/category/:category_id/articles", Articles.articleByCategory);

  /* Task 4 */

  /* Task 10 */
  //Login authentication
  router.post("./login", Auth.login);

  /* Task 11 */
  //POST Register
  router.post("/register", Users.register);
});
