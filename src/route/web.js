import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

let initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/about', homeController.getAboutPage);
  router.get('/crud', homeController.getCRUD);
  router.post('/post-crud', homeController.postCRUD);
  //res api

  app.use('/', router);
};
export default initWebRoutes;
