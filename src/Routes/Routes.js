const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/Producto/ControllerProductos');
const multer = require('multer'); // Asegúrate de importar multer

router.get("/", (req,res)=>{
    res.json({
        mensaje : "Bienvenidos a la api de nuestra tienda"
    })
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directorio donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Nombre de archivo único
    }
  });
  
  const upload = multer({ storage: storage });

router.post('/CrearProducto', upload.single('imagen'), ProductoController.createProducto);
router.get('/ObtenerProductos', ProductoController.getAllProductos);


module.exports = router;