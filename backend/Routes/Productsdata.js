import  express  from "express";
import multer from "multer";
import { addProducts, deleteproduct, getproduct, getproductByCategory, updateProduct } from "../controller/Productsdata.js";

const router= express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Images/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.post('/', upload.single('pic'), addProducts);

router.get("/",getproduct);

router.get('/:category', getproductByCategory);

router.delete("/:productid",deleteproduct);

router.put("/:id", updateProduct);


export default router;