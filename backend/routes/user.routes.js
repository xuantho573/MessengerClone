import express from 'express';
import UserController from '../controllers/users.controller.js';

const userRouter = express.Router();

userRouter
    .get('/user/:id', UserController.get)
    .post('/user', UserController.post)

export default userRouter;