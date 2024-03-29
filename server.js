const Categories = require("./controller/Categories");
const Articles = require("./controller/Articles");
const Users = require("./controller/User");
const Comment = require("./controller/Comment");
const Follows = require("./controller/follow");
const Auth = require("./controller/Auth");
const cors = require("cors");
const multer = require('multer');
const path = require('path');

const { authenticated } = require("./middleware");

require("express-group-routes");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 5000;

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  // allowedHeaders: [
  //   'Content-Type',
  // ],
};

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(cors(corsOpts));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(port, () => console.log(`Listen to port ${port}`));

app.get('/', (req, res) => {
  return res.json({success: true, message: 'oke, berhasil!'});
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

app.group("/api/v1", router => {
  /* Task 1 */
  //GET all Category
  router.get("/categories", Categories.showCategory);
  //POST Category
  router.post("/category", Categories.createCategory);
  //DELETE Category
  router.delete("/category/:id", Categories.deleteCategory);

  /* Task 2 */
  //GET All Article
  router.get("/articles", Articles.allarticle);
  //GET popular article
  router.get("/articles/latest", Articles.getPopular);

  /* Task 3 */
  //GET Article by Category
  router.get("/category/:category_id/articles", Articles.articleByCategory);

  /* Task 4 */
  //ADD article
  router.post("/article", authenticated, multer().any(), Articles.addArticle);
  //DELETE article
  router.delete("/article/:id", authenticated, Articles.deleteArticle);
  //UPDATE article -- update pakai patch atau put
  router.patch("/article/:article_id", authenticated, Articles.updateArticle);

  /* Task 5 */
  //GET Detail Article
  router.get("/article/:id", Articles.getDetailArticle);

  /* Task 6 */
  //ADD data comment -- response tidak sesuai lms
  router.post(
    "/article/:article_id/comment",
    authenticated,
    Comment.AddComment
  );
  //UPDATE data comment
  router.patch("/article/:id/comment", authenticated, Comment.updateComment);
  //Show Comment by Article_id --error show id not suit with query
  router.get(
    "/article/:article_id/comments",
    authenticated,
    Comment.showComments
  );
  //DELETE data comment
  router.delete("/article/:id/comment", authenticated, Comment.deleteComment);

  /* Task 7 */
  //following other user
  router.post("/follow", authenticated, Follows.follow);
  //GET All Follow
  router.get("/follows", authenticated, Follows.getAllFollow);

  /* Task 8 */
  //RELATED Article -- belum menyeleksi yang sudah muncul
  router.get("/articles/:category_id/category", Articles.relatedArticle);

  /* Task 9 */
  //GET Article by User_id
  router.get("/user/:author_id/articles", Articles.articleByPerson);

  /* Task 10 */
  //Login authentication
  router.post("/login", Auth.login);

  /* Task 11 */
  //POST Register
  router.post("/register", Users.register);
  //GET All Users
  router.get("/users", Users.getAllUsers);
});
