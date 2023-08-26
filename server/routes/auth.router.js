import Router from "express";
const router = new Router();
import PostController from "../server/PostController.js";

router.post('/user',PostController.createUser)
router.get('/user/:id',PostController.getOne)
router.post('/business',PostController.createBusiness)
router.get('/business/:id',PostController.getOneB)
router.post('/admin',PostController.createAdmin)
router.get('/admin/:id',PostController.getOneA)
router.post('/place',PostController.createPlace)
router.get('/place/:id',PostController.getOnePl)
router.post('/post',PostController.createPost)
router.get('/post/:id',PostController.getOnePo)
router.post('/event',PostController.createEvent)
router.get('/event/:id',PostController.getOneE)

export default router
