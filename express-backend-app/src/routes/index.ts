import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/', router);
    router.get('/', indexController.getIndex);
    router.post('/resource', indexController.createResource);
    router.get('/resource/:id', indexController.getResource);
}