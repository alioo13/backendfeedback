const { Router } = require('express');
const controller = require('./controller')
const router = Router();

router.get('/' , controller.getfeedback);
router.post('/' , controller.addfeedback);

module.exports = router;