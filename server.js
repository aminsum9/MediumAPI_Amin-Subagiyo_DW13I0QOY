const Categories = require("./controller/Categories");
const Articles = require("./controller/Articles");
const Users = require("./controller/User");
const Comment = require("./controller/Comment");
const Auth = require("./controller/Auth");

const { authenticated } = require("./middleware");

require("express-group-routes");

const express = require("express");

const bodyPanser = require("body-parser");

const app = express();

const port = 3001;

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
  //GET popular article
  router.get("/articles/latest", Articles.getPopular);

  /* Task 3 */
  //GET Article by Category
  router.get("/category/:category_id/articles", Articles.articleByCategory);

  /* Task 4 */

  // not yet using token
  //ADD article
  router.post("/article", authenticated, Articles.addArticle);
  //DELETE article
  router.delete("/article/:id", authenticated, Articles.deleteArticle);
  //UPDATE article -- update pakai patch atau put
  router.patch("/article/:id", authenticated, Articles.updateArticle);

  /* Task 5 */
  //GET Detail Article
  router.get("/article/:id", Articles.getDetailArticle);

  /* Task 6 */
  //POST data comment -- belum selesai
  router.post("/article/:article_id/comment", Comment.AddComment);

  /* Task 9 */
  // router.get("/article/user/:user_id/articles", Articles.articleByPerson);

  /* Task 10 */
  //Login authentication
  router.post("/login", Auth.login);

  /* Task 11 */
  //POST Register
  router.post("/register", Users.register);
});
