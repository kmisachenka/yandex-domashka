import { Router } from 'express';
import * as controllers from './image.controllers';

const router: Router = Router();

// /img/{image_url}
router.route('/*').get(controllers.getOne);

export default router;
