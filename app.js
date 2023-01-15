// Paket yang dibutuhkan
const express = require("express");
// npm install node-fetch@2
const fetch = require("node-fetch");
const request = require('request');

require('dotenv').config()

// Buat server ekspres
const app = express();

// Tunjukkan server nomor port yang akan dijalankan
const PORT = process.env.PORT || 3000;

// Tetapkan mesin templat
app.set("view engine", "ejs");
app.use(express.static('public'));

// Diperlukan untuk mengurai data html untuk permintaan POST
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// DAPATKAN rute
app.get("/", (req, res) => {
  res.render("index");
});

// rute POST
app.post("/convert-mp3", async (req, res) => {

  const videoId = req.body.videoId;
  
  if(
    videoId === undefined ||
    videoId === "" ||
    videoId === null
  ){
    return res.render("index", { success : false, message : "Please enter a video ID"});
  } else {
    
    const fetchAPI = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_HOST
        }
    });

    const fetchResponse = await fetchAPI.json();
 
    if(fetchResponse.status === "ok")
      return res.render("index",{ success : true,  song_title : fetchResponse.title, song_link : fetchResponse.link})
    else
      return res.render("index", { success : false, message : fetchResponse.msg});
  }
});

// Mulai server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
