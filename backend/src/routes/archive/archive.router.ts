import { Router } from 'express';
import * as controllers from './archive.controllers';

const router: Router = Router();

// /api/archive/
router.route('/').get(controllers.getArchive);

// /api/archive/:id
router.route('/:id').post(controllers.archiveOne);

export default router;
