const Categories = require("../models").categories;
const Articles = require("../models").articles;
const Comments = require("../models").comment;
const Users = require("../models").users;
const { time } = require("console");
const moment = require('moment');
const fs = require('fs');

/* Task 2 */
//GET all Article
exports.allarticle = (req, res) => {
  Articles.findAll({
    attributes: {
      include: "id",
      exclude: ["category_id", "is_archived", "is_published", "author_id"]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    },
    order: [["createdAt", "DESC"]]
  }).then(data => res.send(data));
};

//GET pupular article(10 latest article)
exports.getPopular = (req, res) => {
  Articles.findAll({
    attributes: {
      include: "id",
      exclude: ["category_id", "is_archived", "is_published", "author_id"]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    },
    where: {
      is_published: 1,
      is_archived: 0
    },
    order: [["createdAt", "DESC"]],
    limit: 4
  }).then(data => res.send(data));
};

/* Task 3 */
//GET Article by Category
exports.articleByCategory = (req, res) => {
  const { category_id } = req.params;

  Articles.findAll({
    where: {
      category_id
    },
    attributes: {
      include: "id",
      exclude: [
        "content",
        "image",
        "category_id",
        "is_published",
        "is_archived",
        "author_id",
        "createdAt",
        "updatedAt"
      ]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    }
  }).then(data => res.send(data));
};

/* Task 4 */
//ADD article // belum selesai
exports.addArticle = (req, res) => {

  var title = req.body.title;
  var content = req.body.content;
  var category_id = req.body.category_id;
  var image = req.files.image;
  var userId = req.body.userId;
  var is_published = req.body.is_published;
  var is_archived = req.body.is_archived;

  // const dir = './images';
  // if (!fs.existsSync(dir)){
  //     fs.mkdirSync(dir);
  // }
  var imageSavedName = "";

  if(req.files){
    const imageName = req.files[0].originalname;
    const imageBuffer = req.files[0].buffer;
    imageSavedName = `${imageName}-${moment().format('YYYY-MM-DD-HH:mm:ss')}.jpg`;
    const pathName = `./images/${imageSavedName}`;

    fs.writeFile(pathName, imageBuffer, 'binary', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Image saved successfully!');
        }
    });
  }

  var body = {
    title: title,
    content: content,
    // category_id: category_id || 0,
    image: imageSavedName,
    // author_id: userId || 0,
    is_published: is_published || 0,
    is_archived: is_archived || 0
  };


  Articles.create(body).then(data =>
    res.send({
      success: true,
      message: "berhasil menambah artikel",
      data
    })
  );

};
// DELETE article
exports.deleteArticle = (req, res) => {
  Articles.destroy({ where: { id: req.params.id } }).then(data =>
    res.send({
      message: "article successfully delete",
      data
    })
  );
};
// UPDATE article
exports.updateArticle = (req, res) => {
  Articles.update(req.body, { where: { id: req.params.article_id } }).then(
    data =>
      res.send({
        Message: "article update successfully"
      })
  );
};

/* Task 5 */
//GET detail Article // belum ada follownya
exports.getDetailArticle = (req, res) => {
  const { id } = req.params;
  Articles.findOne({
    where: {
      id
    },
    attributes: {
      include: "id",
      exclude: ["category_id", "is_published", "is_archived", "author_id"]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    }
  }).then(data => res.send(data));
};
/* Task 8 */
//GET Related Article
exports.relatedArticle = (req, res) => {
  Articles.findAll({
    where: { category_id: req.params.category_id },
    include: {
      model: Categories
    },
    limit: 3
  }).then(data => res.send(data));
};

/* Task 9 */
//GET Artilce by person
exports.articleByPerson = (req, res) => {
  const author_id = req.params.author_id;
  Articles.findAll({
    where: {
      author_id
    },
    attributes: {
      include: "id",
      exclude: ["category_id", "is_published", "is_archived", "author_id"]
    },
    include: {
      model: Categories,
      attributes: {
        exclude: ["is_published", "is_archived", "createdAt", "updatedAt"]
      }
    }
  }).then(data => res.send(data));
};
