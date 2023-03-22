import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';


router.route('/quiz/items')
        .get(controller.getItems) /** GET Request */
        .post(controller.insertItems) /** POST Request */
        .delete(controller.dropItems) /** DELETE Request */

router.route('/quiz/jquiz')
        .get(controller.getTango) /** GET Request */
        .post(controller.insertTango) /** POST Request */
router.route('/quiz/delete/:id')
        .delete(controller.dropTango) /** DELETE Request */
router.route('/quiz/update/:id')
        .put(controller.updateTango)
/** Questions Routes API */

router.route('/quiz/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

export default router;