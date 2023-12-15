import  express  from "express";
import { deletelogin, getUserLogin, getlogin, log, updateUserById, updatelogin } from "../controller/loginmodeldata.js";

const router= express.Router();

router.post('/', log);

router.get('/',getlogin);

router.delete("/:id",deletelogin);

router.put("/:id", updatelogin);

router.post('/User', getUserLogin);

router.put('/User/:id', updateUserById);

export default router;