const path = require("path");
// const fs = require("fs");
const request = require("request");
// const https = require("https");
const express = require("express");

const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  // データの受け取りはGET
  router.get("/", (req, res, next) => {
    res.render("GoogleTranslateAPI", { title: "Book Reviews"});
  }),
  // データの書き込み
  // データの送信はPOST
  router.post("/", (req, res, next) => {
    router.get("");
    
    // フォームに書かれたデータを受け取る
    const textBefore = String(req.body.beforeTranslate).replace(/[\n\r]/g,"");
    console.log(textBefore);
    
    const params = {
      url: 'https://script.google.com/macros/s/AKfycbyqEF7YmNLF1-faYN7SxYnBZQOAGqQCP__4gfPaanrXhc7eVc4h364W8cUmzPLO8eN5wQ/exec',
      method: 'GET',
      proxy: 'http://proxy.anan-nct.ac.jp:8080',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      form: {
        text: textBefore,
        source: 'en',
        target: 'ja'
      },
      JSON: true
    };
    // console.log(params);

    request.get(params, function(error, responce, body){
        console.log(JSON.parse(body));
    });

    // 送信後は'/'へリダイレクトする
    res.redirect("/");
  })
);

app.listen(3000);