"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "belajar express",
          content:
            "kalau kita mau membuat web app pasti tidak cukup hanya menggunakan satu bahasa saja. misal kita harus pakai html, javascript sebagai front-end dan php sebagai back-end.tapi sekarang, cukup satu bahasa yaitu : javascipt yang akan menghandle front-end dan back-end.bukannya javascript itu kegunaannya untuk nangani logic di halaman browser ya, kok bisa jalan di backend? berkat chrome v8 javascript engine akhirnya javascript bisa juga jalan di backend dan lahirlah nodejs Kesan pertama saya saat pertama kali koding dengan node js ini serasa di permudah banget dalam urusan environment nya. ya secara , kalau kita ngoding php , gak bisa cuma install php terus php nya bisa jalan gitu aja. php butuh apache sebagai web server nya, jadi harus install apache web server juga. tapi dengan nodejs ini , dia juga akan bertindak sebagai web server. jadi untuk menjalankan web app nya kita hanya butuh nodejs. kita gak perlu lagi ngatur-ngatur webserver apache nya hehe , udah di urusin sama nodejs nya. oke jadi gimana cara ngebuat web app dengan nodejs ini? pertama tentu kita butuh nodejs terinstall di komputer kita, untuk cara install nya silahkan lihat dokumentasi nodejs , oh ya gak usah khawatir soal os apa yang support , karena nodejs ini bisa jalan di windows, dan unix",
          image:
            "https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/https://scotch.io/wp-content/uploads/2014/11/node-express-sendfile.png",
          category_id: 1,
          category_name: "pemrograman_web",
          is_published: 1,
          is_archived: 0,
          slug: "belajar express",
          author_id: 1,
          createAt: "2019-12-03 00:00:00",
          updateAt: "2019-12-17 00:00:00"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("articles", null, {});
  }
};
