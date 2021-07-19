const express = require('express'); // call express
const app = express(); // define our app using 
const {getPhotosByAlbumId, returnUrlAndThumbnail} = require('./controller/getPhotos');

const PORT = process.env.PORT || 3000;

 
app.get('/albums/:id/photos', function (req, res) {

  try {
    let albumId = req.params.id;
    let albumPhotos = getPhotosByAlbumId(albumId);
    let formatedPhotos = returnUrlAndThumbnail(albumPhotos)
  
    res.json({formatedPhotos})
  
  } catch (error) {
    res.send(error)
  }

})
 
app.listen(PORT);
