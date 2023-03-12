import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';


router.route('/quiz/users')
        .get(controller.getUsers) /** GET Request */
        .post(controller.insertUsers) /** POST Request */
        .delete(controller.dropUsers) /** DELETE Request */
/** Questions Routes API */

router.route('/quiz/questions')
        .get(controller.getQuestions) /** GET Request */
        .post(controller.insertQuestions) /** POST Request */
        .delete(controller.dropQuestions) /** DELETE Request */

router.route('/quiz/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

export default router;