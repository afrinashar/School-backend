const express = require('express');
const {
  createSalery,
  getAllSalery,
  getSaleryById,
  updateSalery,
  deleteSalery,
  
} = require('../../controllers/teacher/saleryController');

const router = express.Router();

router.route('/').post(createSalery).get(getAllSalery);
router.route('/:id').get(getSaleryById).put(updateSalery).delete(deleteSalery);


module.exports = router;