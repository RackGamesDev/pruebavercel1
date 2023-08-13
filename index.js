//https://www.youtube.com/watch?v=h3NVEN2iy6k
//se crea el archivo vercel.json y se usa "npm install -g vercel" para luego poner "vercel"

import express from 'express';
const app = express();
//import * as url from 'url';
//const __filename = url.fileURLToPath(import.meta.url);
//const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//import mimeTypes from 'mime-types';
//import multer from 'multer';
//const storage = multer.diskStorage({
//    destination: 'uploads/',
//    filename: function(req, file, cb){
//        cb("",file.originalname + Date.now() + "." + mimeTypes.extension(file.mimetype));
//    }
//});
//const upload = multer({
//    storage: storage
//});
let datos = {
    nombre: "yo",
    id: 0
}

app.get('/', (req, res) => {
    console.log("recibido");
    res.sendFile(__dirname + "/views/index.html");
});
app.get('/datos', (req, res) => {
    console.log("recibido");
    res.json(datos);
});
app.post("/guardar", upload.single('avatar'), (req, res) => {

    res.send("ok");
});

const PORT = process.env.PORT || 3000;//importante que el puerto no sea fijo
app.listen(PORT, () => {
    console.log("servidor iniciado en " + PORT);
})