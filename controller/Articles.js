const Categories = require("../models").categories;
const Articles = require("../models").articles;
const Comments = require("../models").comment;
const Users = require("../models").users;
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
  var image = req.body.image;
  var userId = req.body.userId;
  var is_published = req.body.is_published;
  var is_archived = req.body.is_archived;


  var body = {
    title: title,
    content: content,
    category_id: category_id,
    // image: image,
    author_id: userId,
    is_published: is_published,
    is_archived: is_archived
  };

  Articles.create(body).then(data =>
    res.send({
      success: true,
      message: "berhasil menambah artikel",
      data
    })
  );

  // if (req.method === 'POST') {
  //   // Menangkap data gambar yang di-upload
  //   let body = [];
  //   req.on('data', (chunk) => {
  //     body.push(chunk);
  //   }).on('end', () => {
  //     // Menggabungkan data yang di-upload
  //     body = Buffer.concat(body).toString();
  //     // Memecah data menjadi header dan payload
  //     const boundary = body.split('\r\n')[0];
  //     const payload = body.split(boundary).slice(2, -1)[0];
  //     // Menentukan lokasi dan nama file untuk disimpan
  //     const filepath = './images/image.jpg';
  //     // Menyimpan file ke server
  //     fs.writeFile(filepath, payload, { encoding: 'binary' }, (err) => {
  //       if (err) throw err;
  //       console.log('Gambar berhasil disimpan');
  //       res.end();
  //     });
  //   });
  // }
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
