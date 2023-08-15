import { Router } from "express";
import * as userController from "../controllers/user.controller.js";

const router = Router();

router.post('/', userController.createUser);

router.get('/', userController.findAllUser);

router.get('/ping', userController.pingUser);

router.get('/:id', userController.findOneUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);


export default router;