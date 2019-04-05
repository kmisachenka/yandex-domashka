import { Router } from 'express';
import * as controllers from './notes.controllers';

const router: Router = Router();

// /api/notes
router
  .route('/')
  .get(controllers.getAll)
  .post(controllers.createOne);

// /api/notes/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .delete(controllers.removeOne)
  .patch(controllers.updateOne);

export default router;
