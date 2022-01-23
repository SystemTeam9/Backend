const path = require("path");
// const fs = require("fs");
const request = require("request");
// const https = require("https");
const express = require("express");

const url = "https://script.google.com/macros/s/AKfycbyqEF7YmNLF1-faYN7SxYnBZQOAGqQCP__4gfPaanrXhc7eVc4h364W8cUmzPLO8eN5wQ/exec";
const source = "en";
const target = "ja";

const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  // データの受け取りはGET
  router.get("/", (req, res, next) => {
    res.render("GoogleTranslateAPI", { title: "Book Reviews", textAfter: {code: "", text: ""}});
  }),
  // データの書き込み
  // データの送信はPOST
  router.post("/", (req, res, next) => {
    router.get("");
    
    // フォームに書かれたデータを受け取る
    const textBefore = String(req.body.beforeTranslate).replace(/[\n\r]/g,"");
    console.log(textBefore);
    
    const params = {
      url: url + "?text=" + textBefore + "&source=" + source + "&target=" + target,
      method: 'GET',
      proxy: 'http://proxy.anan-nct.ac.jp:8080',
      // headers: {
      //   'content-type': 'application/x-www-form-urlencoded',
      //   accept: 'text/json'
      // },
    };
    // console.log(params);

    request.get(params, function(error, request, body){
        const textAfter = JSON.parse(body);
        console.log(textAfter[Object.keys(textAfter)[1]]);
        res.render("GoogleTranslateAPI", {title: "Book Reviews", textAfter: textAfter});
    });

    // 送信後は'/'へリダイレクトする
    // res.redirect("/");
  })
);

app.listen(3000);