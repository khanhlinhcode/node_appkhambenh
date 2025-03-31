import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine","ejs");//go duoc logic trong cau lenh
    app.set("views","./src/views");

}
module.exports = configViewEngine;